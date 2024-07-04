import { createBrowserRouter } from 'react-router-dom';
import { RootPage } from '../../pages/root/root';
import { ContactPage } from '../../pages/contact/contact';
import { WelcomePage } from '../../pages/welcome/welcome';

export const portfolioRouter = createBrowserRouter([
    {
      path: "/", 
      element: <RootPage />,
      children: [
        {
          path: "/",
          element: <WelcomePage />
        },
        {
          path:"/contact",
          element: <ContactPage />
        },
      ]
    },
  ])