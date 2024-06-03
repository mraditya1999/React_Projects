import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Landing, Error, Register, ProtectedRoute } from './pages';
import {
  Profile,
  AddJob,
  AllJobs,
  Stats,
  SharedLayout,
} from './pages/dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Stats />} />
        <Route path='all-jobs' element={<AllJobs />} />
        <Route path='add-job' element={<AddJob />} />
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route path='landing' element={<Landing />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<Error />} />
    </>
  )
);

export default router;
