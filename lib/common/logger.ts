import * as logger from "winston";
import { format } from "winston";

const f = format.printf(info => {
    return `${new Date(Date.now())} [${info.level}]: ${info.message}`;
  });

const l = logger.createLogger({
    format: f,
    level: process.env.LOG_DEBUG || 'debug',
    transports: [
        new logger.transports.Console()
    ]
    
})

export default l;