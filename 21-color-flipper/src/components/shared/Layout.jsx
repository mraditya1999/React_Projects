import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#f1f5f8');

  const openSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  const changeBackgroundColor = (value) => setBackgroundColor(value);

  return (
    <>
      <Navbar openSidebar={openSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <main style={{ backgroundColor: backgroundColor }}>
        <Outlet context={{ changeBackgroundColor }} />
      </main>
    </>
  );
};
export default Layout;
