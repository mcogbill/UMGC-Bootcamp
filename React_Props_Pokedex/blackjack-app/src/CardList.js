import React from "react";
import Card from "./Card";

/** Card List: renders Card for each card in props.cards */

function CardList({ cards }) {
    const cardsElems = cards.map(cardId => (
        <Card cardId={cardId} key={cardId} />
    ));

    return <div>{cardsElems}</div>;
}

export default CardList;
