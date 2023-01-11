import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/deck", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose
  .connect(
    "mongodb+srv://kihiu:mongoAdmin@cluster0.hrzoyzg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
  });
