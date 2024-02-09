import React from "react";
import { getTotalScore } from "./cards";

/** Score: show hand score from props.cards
 *
 * Props:
 * - cards
 *
 * */

function Score({ cards }) {
    const score = getTotalScore(cards);

    return (
        <div>
            <h2>Score: {score}</h2>
            {score === 21 ? <h4>🎉🎉🎉 BLACKJACK!!! 🎉🎉🎉</h4> : null}
        </div>
    );
}

export default Score;
