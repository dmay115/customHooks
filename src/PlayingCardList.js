import React from "react";
import { v1 as uuid } from "uuid";
import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";
import "./PlayingCardList.css";

function CardTable() {
    const [cards, addCard] = useAxios(
        "https://deckofcardsapi.com/api/deck/new/draw/"
    );

    const handleAddCard = async () => {
        const newCard = await addCard();
        if (newCard) {
            newCard.id = uuid();
        }
    };

    return (
        <div className="PlayingCardList">
            <h3>Pick a card, any card!</h3>
            <div>
                <button onClick={handleAddCard}>Add a playing card!</button>
            </div>
            <div className="PlayingCardList-card-area">
                {cards.map((cardData) => (
                    <PlayingCard
                        key={cardData.id}
                        front={cardData.cards[0].image}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardTable;
