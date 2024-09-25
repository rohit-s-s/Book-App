import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import { PORT, mongoUrl } from "./config.js";
import router from "./Routes/bookRoutes.js";

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(cors());

app.use("/books", router);

if (true) {
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("/", (req, res) => {
    try {
      res
        .status(234)
        .sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    } catch (error) {
      console.log(error);
    }
  });
}

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
