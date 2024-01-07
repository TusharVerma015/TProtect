import React from 'react'
import data from '../backdoor.json'
export default function BackDoor() {
  return (
    <>
    <h1 className='bdh'>These are the list of users associated and their OS</h1>
    <div className="table">
    <table>
        <tr>
            <th>Username</th>
            <th>OS</th>
        </tr>
        <tr>
            <td>
                {data['Username']}
            </td>
            <td>
            {data['Os']}
            </td>
        </tr>
    </table>
    </div>
    </>
  )
}
