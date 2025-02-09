import { createRoot } from 'react-dom/client';

import './index.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import { EditProfilePage } from './components/pages/EditProfilePage';
import { HomePage } from './components/pages/HomePage';
import { NewArticlePage } from './components/pages/NewArticlePage';
import { PrivateRoute } from './components/pages/PrivateRoute';
import { SignInPage } from './components/pages/SignInPage';
import { SignUpPage } from './components/pages/SignUpPage';
import { SinglePostPage } from './components/pages/SinglePostPage';

const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/articles',
        element: <HomePage />,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <EditProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: '/articles/:slug',
        element: <SinglePostPage />,
      },
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
      {
        path: '/new-article',
        element: (
          <PrivateRoute>
            <NewArticlePage />
          </PrivateRoute>
        ),
      },
      {
        path: '/articles/:slug/edit',
        element: (
          <PrivateRoute>
            <NewArticlePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
