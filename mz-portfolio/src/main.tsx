import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import { portfolioRouter } from './framework/router/router.js';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={portfolioRouter}>
    </RouterProvider>
  </React.StrictMode>,
)
