import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import {SingIn} from '../SingIn'
import {MyOrder} from '../MyOrder'
import {MyAccount} from '../MyAccount'
import {Home} from '../Home'
import { Navbar } from '../../Components/Navbar'
import './App.css'

function AppRoutes() {
  let routs = useRoutes([
    {
      path: '/', //enrutado
 element: <Home />//componente
    },
    {
      path: '/my-account', //enrutado
      element: <MyAccount />//componente
    },
    {
      path: '/my-orders', //enrutado
      element: <MyOrder />//componente
    },
    {
      path: '/sing-in', //enrutado
      element: <SingIn />//componente
    }
  ])

  return(routs)
} 

function App() {
  
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes></AppRoutes>
        <Navbar/>
      </BrowserRouter>
    </ShoppingCartProvider>
  
  )
}

export {App}
