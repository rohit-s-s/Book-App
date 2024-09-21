import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoUrl } from "./config.js";
import router from "./Routes/bookRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("Server Initiated");
  return res.status(234).send({ message: "Server initiated" });
});

app.use("/books", router);

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("App connected tp database");
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
