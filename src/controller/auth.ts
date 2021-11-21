import { Request, Response } from "express";
import { UserRefreshClient } from "google-auth-library";
import User from "../model/users";

export const signup = (req: Request, res: Response) =>{
  //console.log('request', req.body);
  //res.status(200).send({ data: "you hit signup endpoint" });
  const { name, email, password } = req.body;
  
  User.findOne({email}).exec((err, user) => {
    if(user) {
      return res.status(400).json({
        error: 'Email is taken',
      })
    }
  })
  
  let newUser = new User({ name, email, password});

  newUser.save((err: any, sucess: any) => {
    if(err) {
      console.log('SIGNUP ERROR', err);
      return res.status(400).json({
        error: err
      })
    }
    res.json({
      message: 'Signup success! Please signin'
    })
  });
}
