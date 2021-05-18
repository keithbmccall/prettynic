export const monthDayTime = (timestamp: string|Date) =>
  new Date(timestamp).toLocaleString("en-us", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
