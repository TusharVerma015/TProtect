import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <div className="header">
      <h1 className='mh'>Welcome to AUDIT CELL ! </h1>
      <img src="../../cs.avif" alt="" />
      </div>
      <div className="testimonials">
        <h1 className="mh mh1">OUR SERVICES</h1>
      </div>
      <div className="cards">
      <div className="outer" style={{height:"400px"}}>
          <h1 style={{fontSize:"2rem"}}>HARDWARE ANALYSIS</h1>
          <button className='btn-info'><Link to="/bd">BACKDOORS AND UNTRUSTED USERS</Link></button>
          <button className='btn-info'><Link to="/ma">MALWARE ANALYSIS</Link></button>
          <button className='btn-info'><Link to="/ps">PERIPHERAL DEVICES</Link></button>
        </div>
        <div className="outer" style={{height:"400px"}}>
          <h1 style={{fontSize:"2rem"}}>SOFTWARE ANALYSIS</h1>
          <button className='btn-info' style={{height:"50px",marginBottom:"70px"}}> <Link to="/nv">Network Testing</Link></button>
          <button className='btn-info' style={{position:"relative",bottom:"40px"}}><Link to="/tc">Source code testing</Link></button>
        </div>
        
      


      </div>
      
      </div>
  )
}
