import { Router } from "express";
import passport from "passport";
import * as controller from "../controllers/listing.controller.js";
import {
  passportJwt,
  jwtStrategy,
} from "../middleware/passport-jwt.middleware.js";

const listingRouter = Router();
passport.use(jwtStrategy);

listingRouter.get("/search", controller.search);
listingRouter.get("/", controller.getAll);
listingRouter.get("/:id", controller.getById);
listingRouter.post("/", controller.addListing);
listingRouter.get("/user/:id", controller.getByUserId);
listingRouter.delete("/:id", passportJwt(), controller.deleteById);

export default listingRouter;
