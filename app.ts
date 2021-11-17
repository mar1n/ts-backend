import express from "express";
import auth from "./src/routes/auth";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', auth);


export default app;
