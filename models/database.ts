import Mongoose from 'mongoose';

let database: Mongoose.Connection;

export const connect = () => {
    const URI = 'mongodb://localhost:27017/sample';

    Mongoose.connect(URI, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    database = Mongoose.connection;

    database.once('open', async () => {
        console.log('Connected to database');
    });

    database.on('error', () => {
        console.log('Error connecting to database');
    });
}

export const disconnect = () => {
    Mongoose.disconnect();
}
