import express, { Request, Response } from "express";
import Deck from "../models/Deck";

export async function getDeckController(req: Request, res: Response) {
  // fetch all decks and send bakc to the user
  // 1. get deck id
  const { deckId } = req.params;
  // 1. fetch the decks from mongo
  const deck = await Deck.findById(deckId);
  console.log(deck);

  // 2. send back the array to the UI
  res.json(deck);
}
