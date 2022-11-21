import express, { Application } from 'express';
import helmet from 'helmet';

const app: Application = express();
const port: number = 3050;

app.use(helmet());

app.get('/', (req, res) => {
    res.send("Get Method")
})

app.post('/create', (req, res) => {
    res.send("Create Method")
})

app.put('/update', (req, res) => [
    res.send("Update Method")
])

app.delete('/delete', (req, res)  => {
    res.send("Delete Method")
})

app.listen(port, () => {
    console.log("🚀 Server Melarikan Diri");
    console.log(`['Web': http://localhost:${port}]`);
})