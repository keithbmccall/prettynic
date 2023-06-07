export const monthDayTime = (timestamp: Date | string) =>
  new Date(timestamp).toLocaleString('en-us', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
