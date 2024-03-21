import express from 'express';
import dotenv from 'dotenv';
import knex from './services/knex.js';
dotenv.config();
import userRoute from './modules/user/user.route.js'
const app = express();
app.use(express.json());

app.use('/users', userRoute);

app.get('/health', (_, res) => {
    return res.send('Sistema está Operacional');
})

app.listen(8080, async () => {
    console.log('Rodando na Porta 8080');
});
