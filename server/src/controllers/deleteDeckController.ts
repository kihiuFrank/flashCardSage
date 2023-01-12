import express, { Request, Response } from "express";
import Deck from "../models/Deck";

export async function deleteDeckController(req: Request, res: Response) {
  // 1. get deck Id from Url
  const deckId = req.params.deckId;
  // 2. delete deck from Mongo
  const deck = await Deck.findByIdAndDelete(deckId);
  // 3. return the deleted deck to the user
  res.json({
    message: "Successfully deleted the entry.",
    deck,
  });
}
