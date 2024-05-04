import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NumberConfirmation from './components/NumberConfirmation'
import NumberEnter from './components/NumberEnter';
import EmailPass from './components/EmailPass';
import PersonalData from './components/PersonalData';
import Contacts from './components/Contacts';
import DeliveryAdress from './components/DeliveryAdress';
import { DataProvider } from './components/DataContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NumberEnter />
    },
  
  {
      path: '/numberConfirmation',
      
      element: <NumberConfirmation />
  },

  {
    path: '/emailPass',
    element: <EmailPass />
  },

  {
    path: '/personalData',
    element: <PersonalData />
  },

  {
    path: '/contacts',
    element: <Contacts />
  },

  {
    path: '/deliveryAdress',
    element: <DeliveryAdress />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>

    
    <RouterProvider router={router} /> 
    </DataProvider>
  </React.StrictMode>
);




