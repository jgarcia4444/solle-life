import React, {useEffect, useState} from 'react'
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Health from './components/Health';
import Join from './components/Join';
import Buy from './components/Buy';

function App() {

  const [fadeIn, setFadeIn] = useState(false);
  const [translate, setTranslate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 25)
    setTimeout(() => {
      setTranslate(true);
    }, 500)
  })


  return (
    <div className={`App p-8 bg-lime-300 ${fadeIn === true ? 'opacity-100' : "opacity-0"} transition-all duration-1000`}>
      <Navbar />
      <div className={`${translate === true ? "scale-100 translte-x-0 translate-y-0" : "translate-x-full translate-y-1/2 scale-0"} transition-all duration-1000 -z-100`}>
        <Header />
        <Health />
        <About />
        <Join />
        <Buy />
      </div>
    </div>
  );
}

export default App;
