import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import applicationRouter from './routes/applicationRoutes.js';
import scheduleRouter from './routes/scheduleRoutes.js';
import employmentRecordRouter from './routes/employmentRecordRoutes.js';
import authRouter from './routes/authRoutes.js';

const app = express();

export const CONTENT_STATUS = {
    fulfilled: "FULFILLED",
    empty: "EMPTY"
}


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter);
app.use('/api/employment-records', employmentRecordRouter);
app.use('/api/applications', applicationRouter);
app.use('/api/schedules', scheduleRouter)

app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});
app.listen(3000, () => console.log("LISTENING TO PORT 3000"));