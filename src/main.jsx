import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AnimatedBackground } from 'animated-backgrounds';
import Navbar from './components/Navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatedBackground animationName="starryNight" />
  <Navbar/>
  </StrictMode>,
)
