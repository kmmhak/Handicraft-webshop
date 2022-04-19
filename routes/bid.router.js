import { Router } from "express";
import passport from "passport";
import * as controller from "../controllers/bid.controller.js";
import {
  passportJwt,
  jwtStrategy,
} from "../middleware/passport-jwt.middleware.js";

const bidRouter = Router();
passport.use(jwtStrategy);

bidRouter.get("/user/:id", controller.getById);
bidRouter.post("/listing/:id", passportJwt(), controller.makeBid);

export default bidRouter;
