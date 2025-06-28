"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLog = void 0;
const firstLine = (message) => {
  if (typeof message === "string") {
    const [line] = message.split("\n");
    return line;
  }
  return message;
};
const dateFormatter = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 3,
  hour12: false,
});
const formatLog = ({ message }) => {
  const date = dateFormatter.format(message.date);
  const prefix = `[${date}] [${message.level}] (${message.scope})`;
  const data = message.data.map((chunk) =>
    chunk instanceof Error
      ? `${chunk.name} ${firstLine(chunk.message)}`
      : chunk,
  );
  return [prefix, ...data];
};
exports.formatLog = formatLog;
