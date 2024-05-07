import './index.scss'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => (
  <div>
    <Navbar />
    <div className='page'>

    <Outlet/>

    </div>
  </div>
)

export default Layout
