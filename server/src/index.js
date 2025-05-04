import express from 'express';
import { authRouter } from './routes/authRoute.routes.js';
const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello There");
  });

app.use("/api/auth",authRouter)

app.listen(port, () => {
    console.log(`the server is running in the port ${port}`);

})