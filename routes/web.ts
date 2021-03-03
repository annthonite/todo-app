import * as indexRouter from '../controllers/index';
import * as todoRouter from '../controllers/todo';
import express from 'express';

let oRouter = express.Router();

oRouter.get('/', indexRouter.showIndex);
oRouter.post('/add/todo', todoRouter.addTodo);
oRouter.get('/show/todo', todoRouter.showAllTodo);

export = oRouter;
