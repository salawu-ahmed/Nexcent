import './App.css'
import Clients from './components/Clients'
import Community from './components/Community'
import Customers from './components/Customers'
import Hero from './components/Hero'
import Marketing from './components/Marketing'
import Navbar from './components/Navbar'
import Pana from './components/Pana'
import Pixelgrade from './components/Pixelgrade'
import Stats from './components/Stats'

function App() {

  return (
    <>
    <Navbar />
    <Hero /> 
    <Clients />
    <Community />
    <Pixelgrade /> 
    <Stats />
    <Pana /> 
    <Customers />
    <Marketing />
    </>
  )
}

export default App
