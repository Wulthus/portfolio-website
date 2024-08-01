import { createBrowserRouter } from 'react-router-dom';
import { RootPage } from '../../pages/root/root';
import { ContactPage } from '../../pages/contact/contact';
import { WelcomePage } from '../../pages/welcome/welcome';
import { NavWheel } from '../../components/nav-wheel/nav-wheel';

export const portfolioRouter = createBrowserRouter([
    {
      path: "/", 
      element: <RootPage />,
      children: [
        {
          path: "/",
          element: <NavWheel />
        },
        {
          path:"/contact",
          element: <ContactPage />
        },
      ]
    },
  ])