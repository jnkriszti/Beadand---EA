import React, { useState } from 'react';

const Blackjack = () => {
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const cardDeck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const dealCards = () => {
    const playerCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];
    const dealerCard = cardDeck[Math.floor(Math.random() * cardDeck.length)];

    setPlayerCards([...playerCards, playerCard]);
    setDealerCards([...dealerCards, dealerCard]);

    setPlayerScore(calculateScore([...playerCards, playerCard]));
    setDealerScore(calculateScore([...dealerCards, dealerCard]));
  };

  const calculateScore = (cards) => {
    let score = 0;
    cards.forEach(card => {
      if (card === 'A') score += 11;
      else if (['K', 'Q', 'J'].includes(card)) score += 10;
      else score += parseInt(card);
    });
    return score;
  };

  return (
    <div>
      <h2>Blackjack</h2>
      <div>
        <h3>Player Cards: {playerCards.join(', ')}</h3>
        <h3>Player Score: {playerScore}</h3>
      </div>
      <div>
        <h3>Dealer Cards: {dealerCards.join(', ')}</h3>
        <h3>Dealer Score: {dealerScore}</h3>
      </div>
      <button onClick={dealCards}>Deal Cards</button>
    </div>
  );
};

export default Blackjack;
