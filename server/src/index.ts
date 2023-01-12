import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/decks", async (req: Request, res: Response) => {
  // fetch all decks and send bakc to the user
  // 1. fetch the decks from mongo
  const decks = await Deck.find();
  console.log(decks);

  // 2. send back the array to the UI
  res.json(decks);
});

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
