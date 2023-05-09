import Profile from '../pages/privatePages/Profile'
import SignedHome from '../pages/privatePages/SignedHome'

export const publicRoutes = [
  {path: '/', element: <SignedHome />},
  {path: '/profile', element: <Profile />},
]
