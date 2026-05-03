import React, { useState } from 'react';
import { useAppDispatch } from '../store/authStore';
import { getAiDifficulty } from '../api/client';
import { AiDifficulty } from '../types';
import { useRouter } from 'react-router-dom';

const AISelection: React.FC = () => {
  const [aiDifficulty, setAiDifficulty] = useState<AiDifficulty | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleSelectDifficulty = async (difficulty: AiDifficulty) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getAiDifficulty(difficulty);
      setAiDifficulty(difficulty);
      router.push('/ai-selection'); // Redirect to the game selection page
    } catch (err: any) {
      console.error('Error fetching AI difficulty:', err);
      setError('Failed to load AI difficulty. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Select AI Difficulty</h2>
      {isLoading && <p>Loading AI difficulty...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <button
          className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded"
          onClick={() => handleSelectDifficulty('Easy')}
        >
          Easy
        </button>
        <button
          className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded"
          onClick={() => handleSelectDifficulty('Medium')}
        >
          Medium
        </button>
        <button
          className="bg-white hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded"
          onClick={() => handleSelectDifficulty('Hard')}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default AISelection;