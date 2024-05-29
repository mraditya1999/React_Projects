import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  LayoutPage,
  HomePage,
  AboutPage,
  CartPage,
  ProductsPage,
  SingleProductPage,
  CheckoutPage,
  ErrorPage,
  PrivateRoutePage,
  AuthWrapper,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthWrapper>
        <LayoutPage />
      </AuthWrapper>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <SingleProductPage /> },
      { path: 'cart', element: <CartPage /> },
      {
        path: 'checkout',
        element: (
          <PrivateRoutePage>
            <CheckoutPage />
          </PrivateRoutePage>
        ),
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
