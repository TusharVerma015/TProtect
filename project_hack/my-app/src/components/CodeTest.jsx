import React from 'react'
import data from '../Socketservertest/report.json'

export default function CodeTest() {
  return (
    <>
    <div className="testHead">
      <h1>Welcome to Code Scanner Section</h1>
    </div>
    { data['errors'].length>0?<h1 className='syntax'>Syntax error in the source code is found while parsing AST File.</h1>:
    <div className="codeScan">

      <div className="itemScan" >
       <p> {data['metrics']['./src/Socketservertest/servertest.py']['loc']} Lines of code scanned </p>
       </div>
      <div className="itemScan">
       <p> {data['metrics']['./src/Socketservertest/servertest.py']['CONFIDENCE.HIGH']} High Vulnerabilities found </p>
       </div>
      <div className="itemScan">
       <p> {data['metrics']['./src/Socketservertest/servertest.py']['CONFIDENCE.MEDIUM']} Medium Vulnerabilities found </p>
       </div>
      <div className="itemScan">
       <p> {data['metrics']['./src/Socketservertest/servertest.py']['CONFIDENCE.LOW']} Low Vulnerabilities found </p>
       </div>
      
    </div>
}
    </>
  )
}
