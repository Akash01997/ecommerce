
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'



function App() {
  

  return (
    <>
    <Navbar />
    <Outlet></Outlet>
    </>
  )
}

export default App
