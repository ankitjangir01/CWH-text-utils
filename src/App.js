import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#383847';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter text to analyse below" mode={mode}/>
    </>
  );
}

export default App;
