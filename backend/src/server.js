import express, { json } from 'express';
import dotenv from 'dotenv';
import routerSport from './routers/routerSport.js';
import routerUser from './routers/routerUser.js';
import routerAthlete from './routers/routerAthlete.js';
import cors from 'cors';

dotenv.config()

const PORT = process.env.PORT || 3001;

const app = express(); 
app.use(json());
app.use(cors());
app.use('/sport', routerSport);
app.use('/user', routerUser);
app.use('/athlete', routerAthlete);
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
