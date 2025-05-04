import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { authRouter } from './routes/authRoute.routes.js';


const app = express();
const port = process.env.port;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello There");
  });

app.use("/api/auth",authRouter)

app.get('/list',(req,res)=>{
  console.log('hello lost');

});

app.listen(port, () => {
    console.log(`the server is running in the port ${port}`);

})