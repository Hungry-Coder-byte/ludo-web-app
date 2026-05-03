import React from 'react';
import { useRouter } from 'react-router-dom';
import styled from 'tailwind-css';

const landingPageStyles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: '2rem',
  },
  description: {
    fontSize: '1.5rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '4rem',
  },
  buttons: {
    marginBottom: '2rem',
  },
  button: {
    fontSize: '1.2rem',
    padding: '1rem 2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '0 1rem',
  },
  button: {
    backgroundColor: '#2ecc71',
    '&:hover': {
      backgroundColor: '#27ae60',
    },
  },
};

const LandingPage: React.FC = () => {
  const router = useRouter();

  return (
    <div style={landingPageStyles.container}>
      <h1 style={landingPageStyles.title}>Ludo</h1>
      <p style={landingPageStyles.description}>
        A classic board game reimagined for the web. Play against friends or
        challenge the AI!
      </p>
      <div style={landingPageStyles.buttons}>
        <button
          style={landingPageStyles.button}
          onClick={() => router.push('/game')}
        >
          Play Game
        </button>
        <button
          style={landingPageStyles.button}
          onClick={() => router.push('/ai-selection')}
        >
          Select AI Difficulty
        </button>
      </div>
    </div>
  );
};

export default LandingPage;