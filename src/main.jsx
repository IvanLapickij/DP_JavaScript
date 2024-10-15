import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AnimatedBackground } from 'animated-backgrounds';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatedBackground animationName="starryNight" />
  </StrictMode>,
)
