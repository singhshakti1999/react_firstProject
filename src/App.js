
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TextForm from './components/TextForm';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const [mode, setDarkMode] = useState('light');
  const toggleMode = () =>
  {
    if (mode==='light')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else
     {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
     }
  }
  
  return (
    <>
      
      <BrowserRouter>
           <Header title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
        <Routes>
          <Route path="/" element={<TextForm mode ={mode}/>}/> 
          <Route path="/Login" element = {<Login/>}/>
          <Route path="/Register" element = {<Register/>}/>
        </Routes>
      </BrowserRouter>

      
  
    </>
    );
}

export default App;
