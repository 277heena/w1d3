import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes/index.js';

const app = express();

app.set('views', path.join(path.dirname(new URL(import.meta.url).pathname), 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

export default app;
