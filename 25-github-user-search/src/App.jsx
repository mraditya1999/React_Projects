import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { Auth0Provider } from '@auth0/auth0-react';
import { GithubProvider } from './context/context';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route
        index
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
);

const App = () => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      CacheLocation='localstorage'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AuthWrapper>
        <GithubProvider>
          <RouterProvider router={router} />
        </GithubProvider>
      </AuthWrapper>
    </Auth0Provider>
  );
};

export default App;
