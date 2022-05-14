import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#383847';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter text to manipulate" mode={mode} />} />
        <Route exact path="about" element={<About mode={mode}/>} />
      </Routes>
    </>
  );
}

export default App;
