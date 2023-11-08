import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader, ErrorMessage, UserSearch, UserInfo } from './components';
import useFetch from './hooks/useFetch';

const App = () => {
  const [username, setUsername] = useState('mraditya1999');
  const {
    data: userData,
    loading,
    error,
  } = useFetch(`https://api.github.com/users/${username}`);

  const handleSearch = (username) => {
    if (username.trim() === '') {
      toast.error('Please enter a GitHub username');
      return;
    }
    setUsername(username);
  };

  return (
    <main className='bg-[#141d2f] text-white min-h-screen flex justify-center items-center'>
      <div className='w-[90vw] max-w-[600px] mx-auto p-4'>
        <h1 className='text-3xl text-center uppercase'>devfinder</h1>

        <UserSearch onSearch={handleSearch} />

        <div className='profile-container mt-8 bg-[#1e2a47] rounded-lg'>
          {loading && <Loader />}
          {error && <ErrorMessage error={error} />}
          {userData && userData.login && !loading && !error && (
            <UserInfo userData={userData} />
          )}
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default App;
