import express from "express";
import { Book } from "../Models/bookModel.js";

const router = express.Router();

//Adding documents
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res.status(400).send({
        message: "Send all required files",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//Getting one record
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findById(id);
    return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
  }
});

//Getting all records
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//Removing records
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book successfully deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Updating Records
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(404).send({ message: "Send all required files" });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book updated sucessfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
