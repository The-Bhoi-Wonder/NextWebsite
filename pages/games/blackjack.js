import { useState } from 'react';

const getRandomCard = () => {
  const cards = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
  ];
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
};

const calculateHandValue = (hand) => {
  let value = 0;
  let hasAce = false;

  for (let card of hand) {
    if (card === 'A') {
      value += 11;
      hasAce = true;
    } else if (card === 'K' || card === 'Q' || card === 'J') {
      value += 10;
    } else {
      value += parseInt(card);
    }
  }

  if (value > 21 && hasAce) {
    value -= 10;
  }

  return value;
};

export default function Blackjack() {
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const dealCards = () => {
    const initialPlayerHand = [getRandomCard(), getRandomCard()];
    const initialDealerHand = [getRandomCard()];

    setPlayerHand(initialPlayerHand);
    setDealerHand(initialDealerHand);
    setGameOver(false);
    setPlayerScore(0);
    setDealerScore(0);
  };

  const hit = () => {
    if (gameOver) {
        console.log("game Over hit")
        return;
    }

    const newCard = getRandomCard();
    setPlayerHand((prevHand) => [...prevHand, newCard]);

    const handValue = calculateHandValue([...playerHand, newCard]);
    if (handValue > 21) {
      setGameOver(true);
      setDealerScore(dealerScore + 1);
    }
  };

  const stand = () => {
    if (gameOver) {
        console.log("game Over stand")
        return;
    }
    while (calculateHandValue(dealerHand) < 17) {
      const newCard = getRandomCard();
      setDealerHand((prevHand) => [...prevHand, newCard]);
    }
  
    const dealerValue = calculateHandValue(dealerHand);
    const playerValue = calculateHandValue(playerHand);
  
    setGameOver(true);
    if (dealerValue > 21 || playerValue > dealerValue && playerValue <= 21) {
      setPlayerScore(playerScore + 1);
    } else if (dealerValue > playerValue && dealerValue <= 21) {
      setDealerScore(dealerScore + 1);
    }
  };

  const playerHandValue = calculateHandValue(playerHand);
  const dealerHandValue = calculateHandValue(dealerHand);

  return (
    <div>
      <h1>Blackjack</h1>
      <button onClick={dealCards}>Deal</button>

      <h2>Player Hand:</h2>
      <p>{playerHand.join(', ')}</p>
      <p>Hand Value: {playerHandValue}</p>

      <h2>Dealer Hand:</h2>
      <p>{dealerHand.join(', ')}</p>
      <p>Hand Value: {dealerHandValue}</p>

      {gameOver && (
        <h2>
          {playerHandValue > 21
            ? 'You Bust!'
            : playerHandValue === dealerHandValue
            ? 'Push!'
            : playerHandValue > dealerHandValue
            ? 'You Win!'
            : 'Dealer Wins!'}
        </h2>
      )}

      <button onClick={hit}>Hit</button>
      <button onClick={stand}>Stand</button>

      <h2>Score:</h2>
      <p>Player: {playerScore}</p>
      <p>Dealer: {dealerScore}</p>
    </div>
  );
}
