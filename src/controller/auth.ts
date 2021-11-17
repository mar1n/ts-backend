import { Request, Response } from "express";

export const signup = (req: Request, res: Response) =>
  res.status(200).send({ data: "you hit signup endpoint" });
