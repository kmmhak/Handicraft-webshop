import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.router.js";
import userRouter from "./routes/user.router.js";
import listingRouter from "./routes/listing.router.js";
import bidRouter from "./routes/bid.router.js";
import messageRouter from "./routes/message.router.js";

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());

server.use(authRouter);
server.use("/users", userRouter);
server.use("/listings", listingRouter);
server.use("/bids", bidRouter);
server.use("/messages", messageRouter);

server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
