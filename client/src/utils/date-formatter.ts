export const monthDayTime = (timestamp: string) =>
  new Date(timestamp).toLocaleString("en-us", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
