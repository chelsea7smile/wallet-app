export const calculateDailyPoints = (): { points: number; formattedPoints: string } => {
  const today = new Date();
  const seasonStart = getSeasonStartDate(today);
  const daysSinceSeasonStart = Math.floor((today.getTime() - seasonStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  let points: number;

  if (daysSinceSeasonStart === 1) {
    points = 2;
  } else if (daysSinceSeasonStart === 2) {
    points = 3;
  } else {
    const previousDayPoints = calculatePreviousDayPoints(daysSinceSeasonStart - 1);
    const twoDaysAgoPoints = calculatePreviousDayPoints(daysSinceSeasonStart - 2);
    points = Math.round(twoDaysAgoPoints + (previousDayPoints * 0.6));
  }

  return {
    points,
    formattedPoints: points >= 1000 ? `${Math.round(points / 1000)}K` : points.toString()
  };
};

const getSeasonStartDate = (date: Date): Date => {
  const month = date.getMonth();
  const year = date.getFullYear();

  if (month >= 2 && month <= 4) { // Spring (March-May)
    return new Date(year, 2, 1);
  } else if (month >= 5 && month <= 7) { // Summer (June-August)
    return new Date(year, 5, 1);
  } else if (month >= 8 && month <= 10) { // Autumn (September-November)
    return new Date(year, 8, 1);
  } else { // Winter (December-February)
    return new Date(year, 11, 1);
  }
};

const calculatePreviousDayPoints = (days: number): number => {
  if (days <= 0) return 0;
  if (days === 1) return 2;
  if (days === 2) return 3;
  
  const previousDayPoints = calculatePreviousDayPoints(days - 1);
  const twoDaysAgoPoints = calculatePreviousDayPoints(days - 2);
  return Math.round(twoDaysAgoPoints + (previousDayPoints * 0.6));
}; 