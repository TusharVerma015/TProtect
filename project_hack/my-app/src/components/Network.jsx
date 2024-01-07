import React from 'react'
import a from '../sample'

export default function Network() {
    let len = a["Services"]?.length;
    if(len===undefined){
      len = 0
    }
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
  backgroundColor: len>=3 ? "red":"green",
  color: "whitesmoke",
  boxShadow: "15px 17px 15px -3px rgba(0,0,0,0.1)",
  transitionProperty:"all",
  transitionDuration:"1s",

  }} className="main">
      <p>{len} VULNERABILITIES FOUND</p>
     </div>
     </div>
    <div className="table">
      {len && 
      <table>
        <thead>
        <tr>
          <th>IP</th>
          <th>PORT</th>
          <th>Service Name</th>
          <th>State</th>
          <th>Protocol</th>
        </tr>
        </thead>
        {a["Services"].map((item,index)=>{
          return(
            <tbody key={index}>
          <tr>
          <td style={{backgroundColor:index%2!==0 ? "#EEEDED":"gray"}}>{a["IP"]}</td>
          <td style={{backgroundColor:index%2!==0? "#EEEDED" : "gray"}}>{item["Port"]}</td>
          <td style={{backgroundColor:index%2!==0? "#EEEDED" : "gray"}}>{a["Services"][index]["Service Name"]}</td>
          <td style={{backgroundColor:index%2!==0? "#EEEDED" : "gray"}}>{a["Services"][index]["State"]}</td>
          <td style={{backgroundColor:index%2!==0 ?"#EEEDED" : "gray"}}>{a['protocol']}</td>
          
        </tr> 
        </tbody>
          ) 
        })}
        
      </table>
}
    </div>
    </>
  )
}
