import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../store/authStore';
import { useAuth } from '../hooks/useAuth';

type NavbarProps = {
  isAuthenticated: boolean;
  user?: { id: string; name: string; email: string };
};

const Layout: React.FC<NavbarProps> = ({ isAuthenticated, user }) => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-semibold text-g">
            Ludo
          </Link>
        </div>
        <div className="space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="text-lg font-medium text-gray-600 hover:text-gray-900"
              >
                Profile
              </Link>
              <button
                className="text-lg font-medium text-white bg-red-500 hover:bg-red-700 py-2 px-4 rounded"
                onClick={() => dispatch({ type: 'logout' })}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/ai-selection"
                className="text-lg font-medium text-gray-600 hover:text-gray-900"
              >
                AI Selection
              </Link>
              <Link
                to="/login"
                className="text-lg font-medium text-gray-600 hover:text-gray-900"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Layout;