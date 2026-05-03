# Ludo Web App

## Project Overview

This project is a web-based implementation of the classic Ludo board game, allowing users to play against each other or AI opponents. It utilizes React for the frontend and Express with MongoDB for the backend.

## Tech Stack

*   **Frontend:** React, Vite, TypeScript, Tailwind CSS
*   **Backend:** Express, TypeScript, MongoDB

## Dependencies

*   vite
*   @vitejs
*   path
*   react-dom
*   react
*   react-router-dom
*   express
*   jwt-decode
*   zod
*   mongodb

## API Endpoints

*   `POST /api/users/register`: Registers a new user account.
*   `POST /api/users/login`: Logs in an existing user.
*   `GET /api/game`: Retrieves the current game state.
*   `POST /api/game`: Creates a new game.
*   `PUT /api/game/:id`: Updates the game state (e.g., token movement).
*   `GET /api/ai/difficulty`: Returns the difficulty level of the AI opponent.

## Project Structure

The project is divided into two main parts: a frontend and a backend.

### Frontend

*   **Directory:** `frontend`
*   **Technologies:** React, Vite, TypeScript, Tailwind CSS
*   **Key Components:**
    *   `Layout`:  A reusable layout component for consistent styling.
    *   `Navbar`:  The navigation bar for the application.
    *   `LudoGame`: The main game component.
    *   `MultiplayerLobby`:  Allows users to create and join multiplayer lobbies.
    *   `AISelection`:  Allows users to select an AI opponent.
    *   `UserProfile`: Displays user profile information.
    *   `LandingPage`: The initial landing page.
*   **Data Fetching:** Uses `client.ts` to handle API requests.
*   **State Management:** Uses Redux Toolkit and Zustand.
*   **Authentication:** Implements user authentication using JWT tokens.

### Backend

*   **Directory:** `backend`
*   **Technologies:** Express, TypeScript, MongoDB
*   **Key Routes:**
    *   `/api/users/register`: User registration.
    *   `/api/users/login`: User login.
    *   `/api/game`: Game management (creation, updates).
    *   `/api/ai/difficulty`: AI difficulty selection.
*   **Data Models:** Defines data models for users, games, and AI opponents using Zod for validation.
*   **Middleware:** Uses JWT authentication middleware for secure API routes.

## Getting Started

1.  **Set up the backend:**  Follow the instructions in the backend directory to set up the MongoDB database and start the Express server.
2.  **Set up the frontend:**  Run `npm install` and `npm run dev` in the frontend directory to start the React development server.
3.  **Access the application:** Open your web browser and navigate to `http://localhost:5173` (or the port specified by the Vite development server).

## Future Enhancements

*   Implement a more robust user interface.
*   Add more game features (e.g., tutorials, achievements).
*   Improve the AI opponent's intelligence.
*   Add support for multiple game modes.