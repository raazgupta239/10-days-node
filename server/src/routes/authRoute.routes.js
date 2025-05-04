import express from 'express';
import { loginInputValidate } from '../middlewares/inputValidate.middlware.js';

export const authRouter = express.Router();

authRouter.post('/login',loginInputValidate,(req,res)=>{
    return res.json("hello login");
});
// authRouter.post('/signin',signinInputValidate, authSigninController);
