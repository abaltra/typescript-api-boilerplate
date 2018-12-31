// lib/app.ts
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as mongoose from "mongoose";

import { UserController } from './controllers/index';
import logger from "./common/logger";

class App {

    public app: express.Application;
    private controllers: any;

    constructor() {
        this.app = express();
        this.config();
        
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //CORS and security
        this.app.use(helmet());

        mongoose.set('useCreateIndex', true);
        mongoose.connect(process.env.MONGO_HOST || 'mongodb://localhost:27017/boiler', { useNewUrlParser: true, autoIndex: true });

        this.controllers = {
            user: new UserController(this.app)
        }

        this.app.use((err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction) => {
            logger.error(err);
            return res.status(500).send();
        });
    }

}

export default new App().app;