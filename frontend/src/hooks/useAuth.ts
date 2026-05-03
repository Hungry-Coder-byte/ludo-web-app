import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authStore';
import { AuthState } from '../store/authSlice';

interface UseAuthReturn {
  isLoggedIn: boolean;
  user?: { id: string; name: string; email: string };
  isLoading: boolean;
}

const useAuth = (): UseAuthReturn => {
  const dispatch = useDispatch();
  const authState = useSelector((state: AuthState) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (authState.token) {
      const decodedToken = decodeToken(authState.token);
      if (decodedToken) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [authState.token]);

  const isLoggedIn = authState.token ? true : false;

  const user = authState.user || undefined;

  const logoutUser = () => {
    dispatch(logout());
    setIsLoading(false);
  };

  return { isLoggedIn, user, isLoading };
};

const decodeToken = (token: string): any => {
  try {
    const decoded = JSON.parse(atob(token));
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export default useAuth;