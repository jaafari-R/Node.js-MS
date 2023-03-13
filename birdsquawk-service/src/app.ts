import express from 'express';
import mongoose from 'mongoose';

import { router } from './routes/routes';

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(router);

const Startup = async () => {
    try {
        await mongoose.connect('mongodb://mongo:27017/birdsquawk');
        console.log("Connected to MongoDB successfully!")
    } catch (err) {
        console.log(err);
    }


    app.listen(5000, () => {
        console.log('BirdSquawk is listening on port', PORT + '.')
    });
}

Startup();