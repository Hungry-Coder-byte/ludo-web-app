import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../store/authStore';
import { createGame } from '../api/client';
import { Game } from '../types';
import { useRouter } from 'react-router-dom';

const MultiplayerLobby: React.FC = () => {
  const [game, setGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    const fetchGame = async () => {
      try {
        const data = await createGame();
        setGame(data);
        setError(null);
      } catch (err: any) {
        console.error('Error creating game:', err);
        setError('Failed to create game. Please try again.');
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
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Multiplayer Ludo Lobby</h1>
      <p className="text-gray-700">
        Game ID: {game.id}
      </p>
      <button
        onClick={() => router.push(`/game/${game.id}`)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Join Game
      </button>
    </div>
  );
};

export default MultiplayerLobby;