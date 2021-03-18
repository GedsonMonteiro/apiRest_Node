import express, { json } from 'express';
import morgan from 'morgan';

//import Routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//inicializacao
const app = express();

//midleware
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;