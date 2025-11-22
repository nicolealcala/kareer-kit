import express from 'express';
import userRouter from './routes/userRoutes.js';
import applicationRouter from './routes/applicationRoutes.js';
import scheduleRouter from './routes/scheduleRoutes.js';
import employmentRecordRouter from './routes/employmentRecordRoutes.js';

const app = express();

app.use('/api/users', userRouter);
app.use('/api/employment-records', employmentRecordRouter);
app.use('/api/applications', applicationRouter);
app.use('/api/schedules', scheduleRouter)

app.listen(3000, () => console.log("LISTENING TO PORT 3000"));