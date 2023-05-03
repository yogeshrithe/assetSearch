import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import PaymentResponse from './pages/search/PaymentResponse';
import Home from './pages/Home/Home'
import SearchPortal from './pages/search/SearchPortal';
import Profile from './pages/profile/Profile'
import Services from './pages/services/Services'
import About from './pages/About/About';
import AssociateWithUs from './pages/Associate/Associate'
import AssociateWithUsForm from './pages/Associate/AssociateForm';
import FAQ from './pages/FAQ/FAQ'
import Contact from './pages/Contact/Contact'
import InvestmentDetails from './pages/search/InvestMentDetails';
import BlogPage from './pages/BlogPage';
import UserPage from './pages/search/SearchResult';
import CustomerViewData from './pages/search/CustomerViewData';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: <Home /> },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'searchResult', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'search', element: <SearchPortal /> },
        { path: 'customerData', element: <CustomerViewData /> },
        { path: 'investmentDetails', element: <InvestmentDetails /> },
        { path: 'profile', element: <Profile /> },
        { path:'paymentResponse', element:<PaymentResponse/>},
        { path:'services', element:<Services/>},
        { path:'about', element:<About/>},
        { path:'associate', element:<AssociateWithUs/>},
        { path:'associateForm', element:<AssociateWithUsForm/>},
        { path:'faq', element:<FAQ/>},
        { path:'contact', element:<Contact/>}
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
