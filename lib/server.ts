// lib/server.ts
import app from "./app";
import logger from './common/logger'


const PORT: number = +process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`Express server listening on port ${PORT}`);
})