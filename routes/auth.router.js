import { Router } from "express";
import passport from "passport";
import * as controller from "../controllers/user.controller.js";
import {
  passportJwt,
  jwtStrategy,
} from "../middleware/passport-jwt.middleware.js";

const authRouter = Router();
passport.use(jwtStrategy);

authRouter.post("/login", controller.login);
authRouter.post("/register", controller.register);
authRouter.get("/users", passportJwt(), controller.getAll);
//authRouter.get("/authenticate", passportJwt(), controller.authenticate);

export default authRouter;
