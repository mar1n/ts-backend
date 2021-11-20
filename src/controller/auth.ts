import { Request, Response } from "express";

export const signup = (req: Request, res: Response) =>{
  console.log('request', req.body);
  res.status(200).send({ data: "you hit signup endpoint" });
}
