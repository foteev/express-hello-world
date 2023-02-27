import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import offerRouter from './routers/offer-router.js';
import orderRouter from './routers/order-router.js';
import productRouter from './routers/product-router.js';
import productCategoryRouter from './routers/product-сategory-router.js';
import userRouter from './routers/user-router.js';
import authRouter from './routers/authentication-router.js';
// import https from 'express-https';'

const DB_LOGIN = 'palletenjoer';
const DB_PASSWORD = 87654321;
const PORT = process.env.PORT || 3333;

const DB_URL = `mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.afhplie.mongodb.net/Palletport?retryWrites=true&w=majority`

const app = express();

// const server = require('https').createServer(app);

app.use(cors());
app.use(express.json());

app.use('/api', productCategoryRouter);
app.use('/api', productRouter);
app.use('/api', offerRouter);
app.use('/api', orderRouter);
app.use('/api', userRouter);
app.use('/api', authRouter);

const startServer = async () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(DB_URL);
        app.listen(PORT,() => console.log('Works on port', PORT, app.a));
    } catch (error) {
        console.error(error);
    }
}

startServer();