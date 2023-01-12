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

app.delete("/decks/:deckId", async (req: Request, res: Response) => {
  // 1. get deck Id from Url
  const deckId = req.params.deckId;
  // 2. delete deck from Mongo
  const deck = await Deck.findByIdAndDelete(deckId);
  // 3. return the deleted deck to the user
  res.json({
    message: "Successfully deleted the entry.",
    deck,
  });
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});
