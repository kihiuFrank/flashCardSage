import express, { Request, Response } from "express";
import Deck from "../models/Deck";

export async function getDecksController(req: Request, res: Response) {
  // fetch all decks and send bakc to the user
  // 1. fetch the decks from mongo
  const decks = await Deck.find();
  console.log(decks);

  // 2. send back the array to the UI
  res.json(decks);
}
