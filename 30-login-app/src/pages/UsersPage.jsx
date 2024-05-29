import { useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import { ErrorPage } from './index';
import { Loader, Users } from '../components';
import { fetchAllUsers } from '../features/usersSlice';
import { useDispatch, useSelector } from 'react-redux';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users, isLoading, isError } = useSelector((state) => state.users);

  const fetchUsers = useCallback(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    if (isError) {
      toast.error('Failed to fetch users');
    }
  }, [isError]);

  if (isLoading) {
    return <Loader />;
  }

  if ((!users || users.length === 0) && !isLoading) {
    return <ErrorPage>No users available</ErrorPage>;
  }

  return (
    <div className='bg-gray-100 py-12 min-h-screen flex items-center justify-center'>
      <Users />
    </div>
  );
};

export default UsersPage;
