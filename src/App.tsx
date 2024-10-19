import { BrowserRouter as Router } from 'react-router-dom';
import '../src/assets/Home.css'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import AboutUs from './sections/about-us/AboutUs'
import Hero from './sections/hero/Hero'
import Service from './sections/services/Services'

function App() {
  

  return (
    <Router>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Service/>  
    <Footer/>  
    </Router>
  )
}

export default App
