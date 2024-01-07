import React from 'react'
import data from '../camera_vul.json'
export default function Camera_Scanner() {
  return (
    <>
        <div className="container">
     <div  style={{
    height: "100px",
  width: "1000px",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: data.length>=3 ? "red":"green",
  color: "whitesmoke",
  boxShadow: "15px 17px 15px -3px rgba(0,0,0,0.1)",
  transitionProperty:"all",
  transitionDuration:"1s",

  }} className="main">
      <p>{data['deviceNotConnected'] && 'No Devices found'}</p>
     </div>
     </div>

    </>
  )
}
