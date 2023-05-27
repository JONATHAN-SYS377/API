import express from 'express';
import config from './config';
import recordatoriosRoutes from './routes/Recordatorios.routes';

const app = express()


// settings
app.set('port', config.port);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(recordatoriosRoutes)


export default app