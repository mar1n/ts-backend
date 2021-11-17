import { Express, Request, Response } from "express";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) =>
    res.status(200).send({ data: "Szymon" })
  );
  app.get("/api/signup", (req: Request, res: Response) => res.status(200).send({data: "you hit signup endpoint"}))
}
