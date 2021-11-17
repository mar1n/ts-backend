import { Request, Response } from "express";
import express from "express";
import { signup } from "../controller/auth";

const router = express.Router();

router.get("/signup", signup);

export default router;
