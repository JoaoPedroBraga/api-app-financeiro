import express from 'express';
import userRoute from './modules/user/user.route.js'
const app = express();
app.use(express.json());

app.use('/user', userRoute);

app.get('/health', (_, res) => {
    return res.send('Sistema está Operacional');
})

app.listen(8080, () => {
    console.log('Rodando na Porta 8080')
});
