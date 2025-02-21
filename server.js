import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import userRouter from './routes/userRoutes.js';
import  libraryRouter  from './routes/libraryRoute.js';
import bookRouter from './routes/bookRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/user',userRouter);
app.use('/library',libraryRouter);
app.use('/book',bookRouter);

const PORT = process.env.PORT || 3003;
db();
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})