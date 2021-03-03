import mongoose from 'mongoose';

export type TodoDocument = mongoose.Document & {
    todo_name: String
}

const todoSchema = new mongoose.Schema({
    todo_name: String
});

export const TodoModel = mongoose.model<TodoDocument>('todo', todoSchema);