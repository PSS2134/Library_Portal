import React from 'react'
import './admincomp.css'

function Issue() {
  return (
    <div>
        <table className='table'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Book ID</th>
                        <th>Book name</th>
                        <th>Issue Date</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Priyansh</td>
                        <td>1</td>
                        <td>Book 1</td>
                        <td>2023-06-01</td>
                        <td><button>Add</button></td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default Issue