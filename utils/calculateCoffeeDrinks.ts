export const calculateCoffeeDrinks = ({ totalTimeSeconds, totalCommits } : { totalTimeSeconds: number, totalCommits: number }) => {
  const t = totalTimeSeconds;
  const c = totalCommits;
  const initialCalculation = (t / 20 + c * 50) / 100;
  const seriesTerm = (Math.PI ** 2 / 12) * Math.exp(-c);
  const correctionTerm = (Math.sqrt(Math.PI) / 2) * (t / 1000);
  return +((initialCalculation + seriesTerm + correctionTerm) / 2).toFixed(2);
};
