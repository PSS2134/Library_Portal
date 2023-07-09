import React,{useEffect,useState} from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import './user.css';
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Delete from "../../Images/delete.svg"


function User() {

    const [data,setData]=useState({});
    const[loading,setLoading]=useState(true);
    const email=JSON.parse(localStorage.getItem('user')).email;
    useEffect(() =>{
        fetch(`http://localhost:5000/api/profile?email=${email}`).then((response) =>  response.json()).then((data)=>{
            console.log(data);
            setData(data);
            setTimeout(()=>{
                setLoading(false);
            },1250);
        })
    },[])
    console.log(data);

    const handleRemove=async(e)=>{
        console.log(e.target);
        const id=e.target.name;
      const res=  await fetch(`http://localhost:5000/api/remove?email=${email}&id=${id}`,{
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
             
        })
        const data=await res.json();
       if(data=="deleted")
       {
        toast.success("Deleted Successfully");
        window.location.reload();
       
       
        
       }
       
    }
  return (
    <div className="user-loading">
    
    <>
    {loading  ?
        
        <div className="loading">
            <HashLoader
            color={'#F37A24'}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
        </div>
        
        :

        <>
        <div className="user">
            <Navbar />
            
            <div className="user-profile">
                <div className="box">
                    <div className="profile-image">
                        <img className='profile-pic' src="https://iitg.ac.in/cepstrum/media/team/IMG_20230214_132847.jpg" alt=""/>
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                        />
                        <div className="photo-change">
                            <div className="photo-select">
                                {/* <input type='file'></input> */}
                                <button className='btn-select' >Select File</button>
                            </div>
                            <div className="photo-update">   
                                <button className='btn-update'>Change</button>
                            </div>
                        </div>    
                        </div>
                    </div>

                    {/* <hr className="line"></hr> */}

                    <div className="user-desc" style={{'fontSize':'1rem'}}>
                        <h3 className='student-information'>Name : {data.userData.name} </h3>
                        <h3 className='student-information'>Contact : {data.userData.contact} </h3>
                        <h3 className='student-information'>Email : {data.userData.email} </h3>
                        <h3 className='student-information'>Room No. : {data.userData.room}</h3>
                        {/* <h3 className='student-information'>Roll No. : {1}</h3> */}
                        <h3 className='student-information'>Course : {data.userData.course}</h3>
                        <h3 className='student-information'>Year : {data.userData.year}</h3>
                        <h3 className='student-information'>Hostel :  Lohit </h3>
                    </div>
                    
                </div>
                {data.book.length?<div className="user-books">
                    <h1 className='Issued-books'>Issued Books</h1>
                    <table>
                    <thead>
                        <tr>
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Book Genre</th>
                        <th>Issue Date</th>
                        <th>Issue Time</th>
                        <th>Return Date</th>
                        <th>Remove</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.book.map((book)=>{
                            {/* const datenew=book.date.toLocaleDateString();
                            const time=book.date.toLocaleString(); */}
                            {/* console.log(book.date) */}
                            {/* let month=book.date.getMonth()
                            const datereturn=book.date.setMonth(month-1); */}

                            return(
                                <tr>
                        <td>{book.id}</td>
                        <td>{book.name}</td>
                        <td>{book.genre}</td>
                        <td>{book.issuedate}</td>
                        <td>{book.issuetime}</td>
                        <td>{book.returndate}</td>
                        
                        <td><img style={{"cursor":"pointer",}} onClick={handleRemove} name={book.id} src={Delete}/></td>
                        <td>Pending</td>
                        </tr>
                            )
                        })
                       }
                    </tbody>
                    </table>
                </div> :<h1 style={{"textAlign":"center","fontFamily":"Poppins","fontWeight":"500","padding":"1%"
                ,"color":"orange"}}>You Have no books</h1>}
                {data.book.length?<div className="user-books">
                    <h1 className='Issued-books'>Past Issued Books</h1>
                    <table>
                    <thead>
                        <tr>
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Book Genre</th>
                        <th>Issue Date</th>
                        <th>Issue Time</th>
                        <th>Return Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>genre</td>
                        <td>issuedate</td>
                        <td>issuetime</td>
                        <td>returndate</td>
                        </tr>
                    </tbody>
                    </table>
                </div> :<h1 style={{"textAlign":"center","fontFamily":"Poppins","fontWeight":"500","padding":"1%"
                ,"color":"orange"}}>You haven't issued any book yet</h1>}
            </div>
            <Footer />
        </div></>}
        </>
    </div>
  )
}

export default User