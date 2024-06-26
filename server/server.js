import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import authRouter from "./routes/auth.route.js";
import testRouter from "./routes/test.route.js";
import officeRouter from "./routes/office.route.js";

const app = express();
const port = 8000;
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/test", testRouter);
app.use("/api/office", officeRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
