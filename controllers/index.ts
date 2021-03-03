import {Request, Response} from 'express';

export const showIndex = (req: Request, res: Response) => {
    res.render('index', {title: 'Simple To Do List App'});
};
