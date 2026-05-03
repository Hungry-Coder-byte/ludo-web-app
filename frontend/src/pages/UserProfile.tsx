import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../store/authStore';
import { getUser } from '../api/client';
import { User } from '../types';
import { useRouter } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getUser();
        setUser(data);
      } catch (err) {
        setError('Failed to fetch user data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [dispatch, router]);

  if (isLoading) {
    return <div>Loading user profile...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p className="text-gray-700">Name: {user.name}</p>
      <p className="text-gray-700">Email: {user.email}</p>
      <p className="text-gray-700">Registration Date: {user.registrationDate}</p>
      {/* Add more user details here */}
      <button
        onClick={() => router.push('/')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Return to Home
      </button>
    </div>
  );
};

export default UserProfile;