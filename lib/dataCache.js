// src/lib/dataCache.js
const CACHE = new Map();

/**
 * fetchSportData(sport) -> returns a promise that resolves to data
 * - caches the promise so repeated requests are instant
 * - caller can still use AbortController if needed (we return an object with promise + controller)
 */
export function preloadSportData(sport) {
  const key = sport.toLowerCase();
  if (CACHE.has(key)) return CACHE.get(key); // may be { promise, data, controller }
  // create a cancellable fetch wrapper
  const controller = new AbortController();
  const promise = fetch(`/api/sports/${key}`, { signal: controller.signal })
    .then((res) => {
      if (!res.ok) throw new Error("Network error");
      return res.json();
    })
    .then((data) => {
      const entry = CACHE.get(key);
      if (entry) entry.data = data;
      return data;
    })
    .catch((err) => {
      // if aborted, don't store error
      if (err.name === "AbortError") return Promise.reject(err);
      // remove cache on network error so retry possible
      CACHE.delete(key);
      return Promise.reject(err);
    });

  const entry = { promise, controller, data: null };
  CACHE.set(key, entry);
  return entry;
}

/** get cached data if available */
export function getCachedSportData(sport) {
  const entry = CACHE.get(sport.toLowerCase());
  return entry ? entry.data ?? null : null;
}

/** cancel an ongoing prefetch if desired */
export function cancelPrefetch(sport) {
  const entry = CACHE.get(sport.toLowerCase());
  if (entry && entry.controller) {
    entry.controller.abort();
    CACHE.delete(sport.toLowerCase());
  }
}
