import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

import Bellow from './components/Bellow';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />

      <Bellow/>
    </div>
  );
}

export default App;
