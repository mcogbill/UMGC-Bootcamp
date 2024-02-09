import React from "react";
import CardList from "./CardList";
import Score from "./Score";
import "./BlackjackGame.css";
import { getCards } from "./cards";

/** Blackjack Game:
 *
 * Props:
 * - values: array of string card values
 *  - suits: array of string suits
 */

function BlackjackGame({ suits, values }) {
    const pairOfCards = getCards(values, suits, 2);
    return (
        <div className="BlackjackGame">
            <CardList cards={pairOfCards} />
            <Score cards={pairOfCards} />
        </div>
    );
}

BlackjackGame.defaultProps = {
    values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"],
    suits: ["C", "D", "H", "S"]
};

export default BlackjackGame;
