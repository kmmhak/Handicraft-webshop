import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.router.js";
import userRouter from "./routes/user.router.js";

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());

server.use(authRouter);
server.use("/users", userRouter);

server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
