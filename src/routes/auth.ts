import { Request, Response } from "express";
import express from "express";
import { signup } from "../controller/auth";
import  userSignupValidator  from "../validators/auth";
import runValidation from "../validators/index";

const router = express.Router();

router.post("/signup", userSignupValidator, runValidation, signup);

export default router;
