import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout';
import Home from '@pages/Home';
import Products from '@pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

export default App;
