import React, { useEffect } from 'react';
import useUserStore from '../../store/useUserStore';
import Preloader from './Preloader';

const Users = () => {
  const { users, fetchUsers, isLoading, error } = useUserStore((state) => ({
    users: state.users,
    fetchUsers: state.fetchUsers,
    isLoading: state.isLoading,
    error: state.error,
  }));

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (isLoading) return <Preloader />;

  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="flex justify-center flex-col items-center">
      <h2>Total users: {users.length}</h2>
      <p className="text-gray-700">Import User component to see the users</p>
    </div>
  );
};

export default Users;
