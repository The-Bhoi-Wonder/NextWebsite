import React, { useState, useEffect } from 'react';

const Blackjack = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (playerScore === 21 || dealerScore === 21 || playerScore > 21 || dealerScore > 21) {
      setGameOver(true);
    }
  }, [playerScore, dealerScore]);

  const dealCard = (isPlayer) => {
    const newCard = Math.floor(Math.random() * 10) + 1;
    if (isPlayer) {
      setPlayerScore((prevScore) => prevScore + newCard);
      setPlayerCards((prevCards) => [...prevCards, newCard]);
    } else {
      setDealerScore((prevScore) => prevScore + newCard);
      setDealerCards((prevCards) => [...prevCards, newCard]);
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setDealerScore(0);
    setPlayerCards([]);
    setDealerCards([]);
    setGameOver(false);
  };

  const checkWinner = () => {
    if (playerScore === dealerScore) {
      return "It's a tie!";
    } else if (playerScore > 21) {
      return 'You busted! Dealer wins.';
    } else if (dealerScore > 21) {
      return 'Dealer busted! You win.';
    } else if (playerScore > dealerScore) {
      return 'You win!';
    } else {
      return 'Dealer wins!';
    }
  };

  const dealerTurn = () => {
    if (dealerScore < 17 && !gameOver)  {
      dealCard(false);
      setTimeout(dealerTurn, 1000);
    } else {
      setGameOver(true);
    }
  };

  const renderResult = () => {
    if (gameOver) {
      return (
        <div>
          <p>{checkWinner()}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      );
    }
    return null;
  };

  const renderPlayerCards = () => (
    <div>
      <p>Player Cards:</p>
      <p>Score: {playerScore}</p>
      {playerCards.map((card, index) => (
        <p key={index}>{card}</p>
      ))}
    </div>
  );

  const renderDealerCards = () => (
    <div>
      <p>Dealer Cards:</p>
      <p>Score: {dealerScore}</p>
      {dealerCards.map((card, index) => (
        <p key={index}>{card}</p>
      ))}
    </div>
  );

  return (
    <div>
      <h1>Blackjack</h1>
      {!gameOver && (
        <div>
          <button onClick={() => dealCard(true)}>Hit</button>
          <button onClick={dealerTurn}>Stay</button>
        </div>
      )}
      {renderResult()}
      {renderPlayerCards()}
      {renderDealerCards()}
    </div>
  );
};

export default Blackjack;
