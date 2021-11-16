import express from "express";
import routes from "./src/routes";
import { Express, Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.get('/user', async (req: Request, res: Response) => res.send({data: "name"}));
routes(app);

export default app;
