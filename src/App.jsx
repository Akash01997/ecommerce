
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import ThemeContext from './components/ThemeContext'


function App() {
  

  return (
    <ThemeContext>
    <Navbar />
    <Outlet></Outlet>
    </ThemeContext>
  )
}

export default App
