import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from './routes';

const App = () => {
  return (
    <>
      <ToastContainer position='top-center' />
      <RouterProvider router={router} />
    </>
  );
};
export default App;
