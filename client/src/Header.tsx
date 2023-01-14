import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div>
          <a href="/">FlashCardSage</a>
        </div>

        <div>
          <a href="/Decks">Decks</a>
        </div>

        <div>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}
