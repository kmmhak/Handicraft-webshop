import { Router } from "express";
import passport from "passport";
import * as controller from "../controllers/listing.controller.js";
import {
  passportJwt,
  jwtStrategy,
} from "../middleware/passport-jwt.middleware.js";

const listingRouter = Router();
passport.use(jwtStrategy);

listingRouter.get("/", controller.getAll);

export default listingRouter;