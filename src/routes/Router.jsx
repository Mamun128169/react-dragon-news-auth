import { createBrowserRouter } from 'react-router-dom'
import Root from '../layout/Root'
import Home from '../pages/Home'
import LogIn from '../pages/LogIn'
import Register from '../pages/Register'
import NewsDetails from '../pages/NewsDetails'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/logIn',
        element: <LogIn />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/news/:newsId',
        loader: () => fetch('/news.json'),
        element: (
          <PrivateRoute>
            <NewsDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
