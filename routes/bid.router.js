import { Router } from "express";
import * as controller from "../controllers/bid.controller.js";

const bidRouter = Router();

bidRouter.get("/users/:id", controller.getById);

export default bidRouter;
