import React,{useEffect,useState} from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import './user.css'

function User() {

    const [data,setData]=useState({});
    const[Loading,setLoading]=useState(true);
    const email=JSON.parse(localStorage.getItem('user')).email;
    useEffect(() =>{
        fetch(`http://localhost:5000/api/profile?email=${email}`).then((response) =>  response.json()).then((data)=>{
            console.log(data);
            setData(data);
            setLoading(false);
        })
    },[])
    // console.log(data.userData.name);
  return (
    <>
    {Loading?<h1>Loading..</h1>:
    <>
    <div className="user">
        <Navbar />
        
        <div className="user-profile">
            <div className="box">
                <div className="profile-image">
                    <img className='profile-pic' src="https://iitg.ac.in/cepstrum/media/team/IMG_20230214_132847.jpg" alt="" width="200px" height="210px"/>
                </div>

                {/* <hr className="line"></hr> */}

<div className="user-desc">
                    <h3 className='student-information'>Name : {data.userData.name} </h3>
                    <h3 className='student-information'>Contact : {data.userData.contact} </h3>
                    <h3 className='student-information'>Email : {data.userData.email} </h3>
                    <h3 className='student-information'>Room No. : {data.userData.room}</h3>
                    <h3 className='student-information'>Roll No. : {1}</h3>
                    <h3 className='student-information'>Course : {data.userData.course}</h3>
                    <h3 className='student-information'>Year : {data.userData.year}</h3>
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
                    {data.book && data.book.map((book)=>{
                        const dateReturn=book.date
                        return(
                            <tr>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.genre}</td>
                    <td>{book.date}</td>
                    <td>{book.date}</td>
                    <td>Returned</td>
                    </tr>
                        )
                    })
                    }
                </tbody>
                </table>
            </div>
        </div>
        <Footer />
    </div></>}
    </>
  )
}

export default User