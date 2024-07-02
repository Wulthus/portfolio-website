import { createBrowserRouter } from 'react-router-dom';
import { RootPage } from '../pages/root/root';
import { ContactPage } from '../pages/contact/contact';

export const portfolioRouter = createBrowserRouter([
    {
      path: "/", 
      element: <RootPage />,
      children: [
        {
          path:"/contact",
          element: <ContactPage />
        },
      ]
    },
  ])