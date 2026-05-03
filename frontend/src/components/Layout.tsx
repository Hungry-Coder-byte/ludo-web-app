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
          <Link to="/" className="text-2xl font-semibold text-gray-800">
            Ludo
          </Link>
        </div>
        <div className="space-x-4">
          {isLoggedIn ? (
            <>
              {pathname === '/' && (
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Profile
                </Link>
              )}
              <button className="text-white bg-blue-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-gray-800">
                Login
              </Link>
              <Link to="/register" className="text-gray-600 hover:text-gray-800">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default Layout;