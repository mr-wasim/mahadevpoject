import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ToastWrapper = React.lazy(() => import("./ToastWrapper"));
const App = React.lazy(() => import("./App"));

// Disable console logs in production
if (import.meta.env.PROD) {
  ["log", "debug"].forEach((method) => {
    console[method] = () => {};
  });
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.Suspense fallback={null}>
      <App />
    </React.Suspense>

    <React.Suspense fallback={null}>
      <ToastWrapper />
    </React.Suspense>
  </QueryClientProvider>,
);
