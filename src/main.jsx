import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AnimatedBackground } from 'animated-backgrounds';
import Navbar from './components/Navbar';
import About from './components/About';
import Cv from './components/Cv';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatedBackground animationName="starryNight" />
  <Navbar/>
  <About/>
  <Cv/>
  </StrictMode>,
)
