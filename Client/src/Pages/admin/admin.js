import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Issued from '../../components/admincomp/issued'
import Add from '../../components/admincomp/add'
import './admin.css';
import Issue from '../../components/admincomp/issue';

function Admin() {
  return (
    <div className="admin">
        <Navbar />
        <div className="issued">
            <h1 className='left-head'>Issued Books</h1>
            <Issued />
        </div>
        <div className="issue">
            <h1 className='left-head'>Books to be Issued</h1>
            <Issue />
        </div>
        <div className="order">
            <h1 className='left-head'>Books to be Ordered</h1>
            <Add />
        </div>
    </div>
  )
}

export default Admin