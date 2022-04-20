import { Router } from "express";
import passport from "passport";
import * as controller from "../controllers/message.controller.js";
import {
  passportJwt,
  jwtStrategy,
} from "../middleware/passport-jwt.middleware.js";

const messageRouter = Router();
passport.use(jwtStrategy);

messageRouter.get("/", passportJwt(), controller.usersMessages);
messageRouter.post("/", passportJwt(), controller.sendMessages);

export default messageRouter;
