import express from 'express';
import path from 'path';
import oRouter from './routes/web';
import { connect } from './models/database';

let logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', oRouter);

connect();

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
});

export default app;








