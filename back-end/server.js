import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import expressListEndpoints from 'express-list-endpoints';
import playerRoutes from './routes/playerRoutes.js'
import teamRoutes from './routes/teamRoutes.js'

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

mongoose
 .connect(process.env.MONGO_URI)
 .then(() => console.log('MONGODB CONNESSO CORRETTAMENTE'))
 .catch((err) => console.error('ERRORE', err))


app.use('/api/players', playerRoutes)
app.use('/api/teams', teamRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('SIAMO IN ASCOLTO SULLA PORTA ' + PORT);
    console.table(
        expressListEndpoints(app))});
        