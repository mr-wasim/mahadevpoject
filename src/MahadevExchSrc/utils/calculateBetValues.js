export const calculateBetValues = (placedBets, eventId, opt) => {
  if (!Array.isArray(placedBets) || !opt) return 0;

  const filteredBets = placedBets.filter(
    (pb) =>
      pb.marketId === opt.marketId &&
      pb.matchId?.toString() === eventId?.toString()
  );

  const fbOfThisRunner = filteredBets.filter(
    (fb) => fb.selectionId.toString() === opt.selectionId.toString()
  );

  const fbOfOtherRunners = filteredBets.filter(
    (fb) => fb.selectionId.toString() !== opt.selectionId.toString()
  );

  const total =
    fbOfThisRunner.reduce(
      (acc, fbr) =>
        acc +
        (fbr.type === "Back"
          ? Number(fbr.favourMargin)
          : -Number(fbr.againstMargin)),
      0
    ) +
    fbOfOtherRunners.reduce(
      (acc, fbor) =>
        acc +
        (fbor.type === "Back"
          ? -Number(fbor.againstMargin)
          : Number(fbor.favourMargin)),
      0
    );

  return Number(total).toFixed(0);
};   