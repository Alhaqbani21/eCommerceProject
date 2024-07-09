import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import ErrorPage from '../pages/ErrorPage';
import DetailsPage from '../pages/DetailsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProfilePage from '../pages/ProfilePage';
import OrderHistory from '../pages/OrderHistory';
import About from '../pages/About';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/details/:id',
    element: <DetailsPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },

  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/OrderHistory',
    element: <OrderHistory />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
