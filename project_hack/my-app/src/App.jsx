import './App.css';
import React  from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Network from './components/Network';
import CodeTest from './components/CodeTest';
import Footer from './components/Footer';
import BackDoor from './components/BackDoor';
import MalwareScan from './components/MalwareScan';
import MediaDevices from './components/MediaDevices';
import Camera_Scanner from './components/Camera_Scanner';
import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";

function App() {
 
  
  
 
  return (
    <Router>
    <div className="App">
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}/>
        
      
      <Route path='/nv' element={<Network/>} />
      
    
    <Route path='/tc' element={<CodeTest/>}/>
    <Route path='/bd' element={<BackDoor/>}/>
    
    
    
    <Route path='/ma' element={<MalwareScan/>}/>
    <Route path='/ps' element={<MediaDevices/>}/>
    <Route path='/cs' element={<Camera_Scanner/>}/>

    </Routes>

    <Footer/>
        
    </div>
    </Router>
  );
}

export default App;
