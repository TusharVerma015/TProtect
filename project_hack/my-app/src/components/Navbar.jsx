import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  const [date, setdate] = useState(new Date().toLocaleString())
  setInterval(() => {
    setdate(new Date().toLocaleString())
  }, 1000)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bgcolornav">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">AUDIT CELL</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nv">Test Network</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tc">Source Code Scanner</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bd">Back Doors</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ma">Malware Analysis</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ps">Peripheral Devices</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cs">Camera Scanner</Link>
          </li>
          <li style={{color:"white",position:"relative",top:"10px",left:"10px"}} className="nav-item"> 
            {date}
          </li>
          
          
        </ul>
      </div>
    </div>
  </nav>
  )
}
