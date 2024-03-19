import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import userRoute from './modules/user/user.route.js'
import knex from 'knex';
const app = express();
app.use(express.json());

app.use('/users', userRoute);

app.get('/health', (_, res) => {
    return res.send('Sistema está Operacional');
})

app.listen(8080, async () => {
    console.log('Rodando na Porta 8080')
});
