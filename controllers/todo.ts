import {Request, Response} from 'express';
import TodoService from '../service/todo';

let oTodoService = new TodoService();

export const addTodo = (oRequest: Request, oResponse: Response) => {
    let aReturn = oTodoService.addTodo(oRequest.body.data);
    aReturn.then((aData: any) => {
        oResponse.json(aData);
    }).catch(oError => oResponse.send(oError))
}

export const showAllTodo = (oRequest: Request, oResponse: Response) => {
    let aReturn = oTodoService.showAllTodo();
    aReturn.then((aData: any) => {
        oResponse.json(aData);
    });
}

