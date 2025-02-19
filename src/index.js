import express from 'express';
import usersRoutes  from './routes/users.routes.js'
import cors from 'cors';

const app = express();
const corsOptions = {
    origin: process.env.ORIGIN,
    methods: ['POST','GET'],
};
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/users', usersRoutes);

export default app;
