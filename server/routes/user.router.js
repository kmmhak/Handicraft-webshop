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
userRouter.get("/:id", controller.getById);
userRouter.patch("/change", passportJwt(), controller.changePassword);
userRouter.patch("/", passportJwt(), controller.updateInfo);
userRouter.delete("/:id", passportJwt(), controller.deleteUser);
userRouter.patch("/:id", passportJwt(), controller.changeRole);

export default userRouter;
