import React, { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AnimatedBackground } from 'animated-backgrounds';
import Navbar from './components/Navbar';
import About from './components/About';
import Cv from './components/Cv';
import Projects from './components/Projects';

function App() {
  const [animationName, setAnimationName] = useState('starryNight');

  useEffect(() => {
    const animations = ['starryNight', 'floatingBubbles', 'gradientWave', 'particleNetwork', 'galaxySpiral'];
    const storedIndex = localStorage.getItem('backgroundAnimationIndex');
    const newIndex = storedIndex ? (parseInt(storedIndex) + 1) % animations.length : 0;
    setAnimationName(animations[newIndex]);
    localStorage.setItem('backgroundAnimationIndex', newIndex.toString());
  }, []);

  return (
    <>
      <AnimatedBackground animationName={animationName} />
      <Navbar />
      <About />
      <Cv />
      <Projects />
    </>
  );
}

// Outside of the App function, rendering to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);