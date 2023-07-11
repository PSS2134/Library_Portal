import React,{useEffect,useState} from 'react'
import './admincomp.css'

function Requested({allBooks}) {
    
    console.log(allBooks);
    const handleApprove = async(e)=>{
      const unique_id=e.target.name;
       
  const res =await fetch(`/api/admin/${unique_id}`,{
        method: 'PUT',
        headers: {"Content-Type": "application/json"},

      })
      const data=await res.json();
      if(data=='updated')
      {
        
        window.location.reload();
      }
    }
  return (
    <div>
        <table className='table'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Book ID</th>
                        <th>Book name</th>
                        <th>Genre</th>
                        <th>Issue Date</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
             <tbody>
              {  allBooks.map((book)=>{
                if(book.issued==0)
                {
                    return(
                        <tr>
                        <td>{book.username}</td>
                         <td>{book.bookid}</td> 
                         <td>{book.bookname}</td>
                        <td>{book.genre}</td>
                        <td>{book.issuedate}</td>
                        <td>{book.issuetime}</td>
                        <td><button className='approve-btnn' name={book._id} onClick={handleApprove}>Approve</button></td>
                    </tr>
                    )
                }
                    
                })}
                    
                </tbody>
            </table> 
    </div>
  )
}

export default Requested;