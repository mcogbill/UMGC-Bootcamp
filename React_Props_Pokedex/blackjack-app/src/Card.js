import React from "react";
import "./Card.css";

/** Show a single card.
 *
 * Props:
 * - cardId: id of card, as used at deckOfCardsApi.com
 */

function Card({ cardId }) {
    return (
        <img
            className="Card"
            src={`https://deckofcardsapi.com/static/img/${cardId}.png`}
            alt={`${cardId} playing card`}
        />
    );
}

export default Card;
