export const formatMetersToKm = meters => {
  const km = meters / 1000;
  return `${km.toFixed(1)}km`;
};
