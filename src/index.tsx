import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Authorized, Login } from '@src/layouts';
import { App, ProductView, ProductsList, Welcome } from '@src/pages';
import store from '@src/store';

import { ModalProvider } from './contexts';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    children: [
      {
        path: '/login',
        element: <App />,
      }
    ],
  },
  {
    path: '/auth',
    element: <Authorized />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'products',
        element: <ProductsList />,
      },
      {
        path: 'products/:id',
        element: <ProductView />,
      }
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
