import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import ErrorPage from '../pages/ErrorPage';
import DetailsPage from '../pages/DetailsPage';

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
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
