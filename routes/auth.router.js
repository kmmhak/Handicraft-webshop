import { Router } from "express";
import passport from "passport";
import * as controller from "../controllers/user.controller.js";
import { jwtStrategy } from "../middleware/passport-jwt.middleware.js";

const authRouter = Router();
passport.use(jwtStrategy);

authRouter.post("/login", controller.login);
authRouter.post("/register", controller.register);

export default authRouter;
