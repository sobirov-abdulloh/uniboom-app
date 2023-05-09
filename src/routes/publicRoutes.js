import Basket from '../pages/publicPages/Basket'
import Catalog from '../pages/publicPages/Catalog'
import Favourites from '../pages/publicPages/Favourites'
import Home from '../pages/publicPages/Home'
import Declaration from '../pages/publicPages/Decralation'
import Login from '../pages/publicPages/Login'
import ProductDetail from '../pages/publicPages/ProductDetail'
import Register from '../pages/publicPages/Register'

export const publicRoutes = [
  {path: '/', element: <Home />},
  {path: '/basket', element: <Basket />},
  {path: '/catalog', element: <Catalog />},
  {path: '/favourites', element: <Favourites />},
  {path: '/declaration', element: <Declaration />},
  {path: '/productDetail/:id', element: <ProductDetail />},
  {path: '/register', element: <Register />},
  {path: '/login', element: <Login />},
]
