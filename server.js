const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-Routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:3000/books

mongoose
  .connect(
    "mongodb+srv://admin:skittles623@cluster0.bjgkyzs.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));




//"mongodb+srv://admin:skittles623@cluster0.bjgkyzs.mongodb.net/bookstore?retryWrites=true&w=majority"
