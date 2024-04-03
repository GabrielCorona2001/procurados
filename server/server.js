import express from 'express';
import personRoutes from "./routes/personRoutes.js"
const app = express();
const port = 3003;


app.use(express.json());

app.listen(port, () => {
    console.log("servidor rodando")
})

app.use(personRoutes)   

