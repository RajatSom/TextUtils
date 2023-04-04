import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import React, {useState} from 'react'
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#023952';
    }
    else {setMode('light')
     document.body.style.backgroundColor='white';}
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils " mode={mode} toggleMode={toggleMode}/>
<div className="container">
<TextForm heading="Enter the text to analyze" mode={mode}/>
{/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode}/>}/> */}
        {/* </Routes> */}
        
</div>
{/* </Router> */}
    </>
  )
}
export default App
