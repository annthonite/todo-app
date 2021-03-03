import { TodoModel } from '../models/todo';

export default class TodoService {
    public async addTodo(todo: any): Promise<any> {
        try {
            return await TodoModel.create({todo_name: todo});
        } catch(oError) {
            return oError;
        }
    }

    public async showAllTodo(): Promise<any> {
        try {
            return await TodoModel.find({}).sort({_id: -1});
        } catch(oError) {
            return oError
        }
    }
}