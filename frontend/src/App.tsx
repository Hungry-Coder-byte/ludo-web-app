import React from 'react';
import {RouterProvider, createBrowserRouter, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import AISelection from './pages/AISelection.tsx';
import MultiplayerLobby from './pages/MultiplayerLobby.tsx';
import LudoGame from './pages/LudoGame.tsx';
import UserProfile from './pages/UserProfile.tsx';
import {Navbar} from './components/Navbar.tsx';
import { Layout } from './components/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/ai-selection',
    element: <AISelection />,
  },
  {
    path: '/multiplayer-lobby',
    element: <MultiplayerLobby />,
  },
  {
    path: '/ludo-game/:gameId',
    element: <LudoGame />,
  },
  {
    path: '/user-profile',
    element: <UserProfile />,
  },
]);

function App() {
  return (
    <Layout>
      <Navbar />
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;