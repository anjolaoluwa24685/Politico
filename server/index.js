import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';
import routes from './routes'

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);
app.listen(port, () =>{
    winston.info('server successfully connected');
});
export default app;