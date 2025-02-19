import { JSX } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout/RootLayout';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/Home/Home';
import RoomsPage from './pages/Rooms/Rooms';
import ContactPage from './pages/Contact/Contact';
import LoginPage from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'rooms', element: <RoomsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
]);

export default function App(): JSX.Element {
  return <RouterProvider router={router} />;
}
