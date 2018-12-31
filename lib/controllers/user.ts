import { Request, Response, Application, NextFunction } from 'express';
import { User, IUserModel } from '../schemas/index' 
import { IUser } from '../interfaces/index';

export class UserController {
    constructor(app:Application) {
        app.get('/user/:email', this.get);
        app.put('/user', this.save);
    }

    public async get(req: Request, res: Response): Promise<void> {
        let email: string = req.params.email;
        let user: IUser = await User.findOne({ email: email });

        if (!user) {
            res.status(404).send();
            return;
        }

        res.json(user);
    }

    public async save(req: Request, res: Response, next: NextFunction) {
        let newUser: IUserModel = new User(req.body);
        try {
            await newUser.save()
            res.status(201).send(newUser);
        } catch (e) {
            return next(new Error(`Could not save ${newUser}`));
        }
        
    }

}