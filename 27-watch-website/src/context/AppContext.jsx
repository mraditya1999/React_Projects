import { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // check scroll
  const checkScroll = (headerRef) => {
    window.scrollY >= 50
      ? headerRef.current.classList.add('scroll-header')
      : headerRef.current.classList.remove('scroll-header');
  };

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        checkScroll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
