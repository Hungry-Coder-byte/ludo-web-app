import React, { useEffect } from 'react';
import { useAppDispatch } from '../store/authStore';
import { getGame } from '../api/client';
import { GameState } from '../types';

const LudoGame: React.FC = () => {
  const dispatch = useAppDispatch();

  const [game, setGame] = React.useState<GameState | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchGame = async () => {
      setIsLoading(true);
      try {
        const data = await getGame();
        setGame(data);
        setError(null);
      } catch (err: any) {
        console.error('Error fetching game:', err);
        setError('Failed to load game.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGame();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading game...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!game) {
    return <div>No game found.</div>;
  }

  return (
    <div>
      <h1>Ludo Game</h1>
      {/* Render game board and player information here based on the 'game' state */}
      {/* Example: Displaying player tokens and their positions */}
      {/* <p>Player 1: {game.players[0].name} - {game.board[0].token}</p> */}
      {/* <p>Player 2: {game.players[1].name} - {game.board[1].token}</p> */}
    </div>
  );
};

export default LudoGame;