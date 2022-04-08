import { Router } from "express";
import passport from "passport";
import * as controller from "../controllers/user.controller.js";
import {
  passportJwt,
  jwtStrategy,
} from "../middleware/passport-jwt.middleware.js";

const userRouter = Router();
passport.use(jwtStrategy);

userRouter.get("/", passportJwt(), controller.getAll);

export default userRouter;
