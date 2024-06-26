import { createBrowserRouter } from 'react-router-dom';
import { RootPage } from '../pages/root/root';

export const portfolioRouter = createBrowserRouter([
    {
      path: "/", 
      element: <RootPage />
    },
  ])