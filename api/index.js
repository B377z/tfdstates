import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js'
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.log(err);
})

const app = express(); // Call the express function

app.use(express.json());

// Use the user routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute)

app.listen(3000, () => {
    console.log('Server listening on port 3000!');
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})