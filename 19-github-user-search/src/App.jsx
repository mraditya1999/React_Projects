import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
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
    <AuthWrapper>
      <GithubProvider>
        <RouterProvider router={router} />
      </GithubProvider>
    </AuthWrapper>
  );
};

export default App;
