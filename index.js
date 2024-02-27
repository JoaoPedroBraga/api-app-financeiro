import express from 'express';
const app = express();
app.use(express.json());

app.get('/health', (_, res) => {
    return res.send('Sistema está Operacional');
})

app.listen(8080, () => {
    console.log('Rodando na Porta 8080')
});
