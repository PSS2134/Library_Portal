import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import './user.css'

function User() {
  return (
    <div className="user">
        <Navbar />
        <div className="user-profile">
            <div className="box">
                <div className="profile-image">
                    <img className='profile-pic' src="https://iitg.ac.in/cepstrum/media/team/IMG_20230214_132847.jpg" alt="" width="200px" height="210px"/>
                </div>

                {/* <hr className="line"></hr> */}

                <div className="user-desc">
                    <h3 className='student-information'>Name : RR King </h3>
                    <h3 className='student-information'>Contact : 1234567890 </h3>
                    <h3 className='student-information'>Email : priyansh@gmail.com </h3>
                    <h3 className='student-information'>Room No. : D317 or D32 or E345</h3>
                    <h3 className='student-information'>Roll No. :  civil wala?</h3>
                    <h3 className='student-information'>Hostel :  Lohit </h3>
                </div>
            </div>
            <div className="user-books">
                <h1 className='Issued-books'>Issued Books</h1>
                <table>
                <thead>
                    <tr>
                    <th>Book ID</th>
                    <th>Book Name</th>
                    <th>Book Genre</th>
                    <th>Issue Date</th>
                    <th>Return Date</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Book 1</td>
                    <td>Fiction</td>
                    <td>2023-06-01</td>
                    <td>2023-06-15</td>
                    <td>Returned</td>
                    </tr>
                    <tr>
                    <td>1</td>
                    <td>Book 1</td>
                    <td>Fiction</td>
                    <td>2023-06-01</td>
                    <td>2023-06-15</td>
                    <td>Returned</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default User