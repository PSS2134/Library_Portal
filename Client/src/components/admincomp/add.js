import React,{useEffect,useState} from 'react'
import './admincomp.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add() {

    const [order,setOrder]=useState([]);

    useEffect(()=>{
    fetch("https://backendlibrary.onrender.com/api/admin_order").then(res=>res.json()).then(data=>{
        console.log(data);
        setOrder(data);
    })
    },[])
    const handleApprove=async(e)=>{
   const id=e.target.name;
   console.log(id);
   const res= await fetch(`https://backendlibrary.onrender.com/api/admin_order?id=${id}`,{
    method:"PUT",
    headers:{
        "Content-Type": "application/json"
    },
   })
   const data=await res.json();
   if(data=="Order Approved")
   {
    toast.success("Approved Order");
    window.location.reload();
   }
  
    }

  return (
    <div>
        <div className="zinda-hoon" >
        <table className='table'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Book name</th>
                        <th>Genre</th>
                        <th>Author Name</th>
                        <th>Applied Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {order&& order.length&& order.toReversed().map((book)=>{
                    return(
                        <tr>
                        <td> <a href={`/adminuser/${book.email}`}>{book.username}</a></td>
                        <td>{book.name}</td>
                        <td>{book.genre}</td>
                        <td>{book.author}</td>
                        <td>{book.date}</td>
                       {book.approved?<td
                                  style={{
                                    color: "green",
                                    fontWeight: "600",
                                  }}
                                >
                                  Approved
                                </td>:<td> <button
                        className="approve-btnn"
                        name={book._id}
                        onClick={handleApprove}
                        
                      >
                        Approve
                      </button></td>} 
                    </tr>
                    )
                  })}  
                </tbody>
            </table>
            </div>
    </div>
  )
}

export default Add