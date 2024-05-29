import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Layout, Simple, Hex, Rgb, Hsl } from './components';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Simple />} />
        <Route path='hex' element={<Hex />} />
        <Route path='rgb' element={<Rgb />} />
        <Route path='hsl' element={<Hsl />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
