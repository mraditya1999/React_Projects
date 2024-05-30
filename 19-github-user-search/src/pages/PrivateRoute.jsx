import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const PrivateRoute = ({ children, ...rest }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;

  useEffect(() => {
    if (!isUser) return navigate('/login');
  }, [isUser]);

  return children;
};

export default PrivateRoute;
