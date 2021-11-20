import express from "express";
import morgan from "morgan";
import auth from "./src/routes/auth";
import cors from "cors";
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));

//app.use(cors()); // allows all origins
if(process.env.NODE_ENV = 'development') {
    app.use(cors({origin: 'http://localhost:3000'}))
}

app.use('/api', auth);




export default app;
