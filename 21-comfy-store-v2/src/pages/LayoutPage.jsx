import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from '../components';

const LayoutPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};
export default LayoutPage;
