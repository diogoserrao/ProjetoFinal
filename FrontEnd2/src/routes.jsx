import { createBrowserRouter } from 'react-router-dom'
import { Default } from './layouts/Default'
import { Construction } from './pages/Construction';
import { Status } from "./pages/Status";
import { Timeline } from './pages/Timeline'
import { Register } from './pages/Register'
import { Login } from './pages/Login';
import { ProfileAll} from './pages/ProfileAll'

export const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: '/status/:content',
        element: <Status />
      },
      {
        path: '/perfil',
        element: <ProfileAll/>
      },
      {
        path: '*',
        element: <Construction />
      },
    ]
  }
])
