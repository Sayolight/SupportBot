const { createLogger, format, transports } = require("winston");
const { combine, printf } = format;

const myFormat = printf(
  ({ level = "", message = "", label = "", timestamp = "" }) => {
    return `${timestamp} ${level}: ${message}`;
  }
);

const logger = createLogger({
  level: process.env.LOGGING_LEVEL ?? "info",
  format: combine(
    format.timestamp(),
    format.splat(),
    format.simple(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "supportbot.log" }),
  ],
});

export { logger };
