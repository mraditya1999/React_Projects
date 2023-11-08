import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './pages/ProtectedRoute';

const router = (
  <AuthContextProvider>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route
        path='/home'
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  </AuthContextProvider>
);

function App() {
  return router;
}

export default App;
