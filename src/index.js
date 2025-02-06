import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';
import Accounts from './components/pages/Accounts';
import SingleAccounts from './components/pages/SingleAccount';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement:<Error/>
  },
  {
    path:'/about',
    element: <About/>
  },
  {
    path:'/accounts',
    element:<Accounts/>
  },
  {
    path:'/accounts/:name',//creo un router dinamico 
    element:<SingleAccounts/>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
