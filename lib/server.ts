// lib/server.ts
import app from "./app";
import logger from './common/logger'

const PORT: number = +process.env.PORT || 3000;
try {
    app.listen(PORT, () => {
        logger.info(`Express server listening on port ${PORT}`);
    });
} catch (e) {
    logger.error(e);
    process.exit(-1);
}
 