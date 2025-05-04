import express from 'express';
import { loginInputValidate ,signinInputValidate} from '../middlewares/authValidation.middlewares.js';
import { loginUser,signupUser } from '../controllers/authController.controllers.js';

export const authRouter = express.Router();

authRouter.post('/login',loginInputValidate, loginUser);
authRouter.post('/signin',signinInputValidate, signupUser);
