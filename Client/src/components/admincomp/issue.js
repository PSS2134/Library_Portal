import React,{useEffect,useState} from 'react'
import './admincomp.css'

function Issue() {
    
    const [data,setData]=useState({});
    const email=JSON.parse(localStorage.getItem('user')).email;
    useEffect(() =>{
        fetch(`http://localhost:5000/api/admin_issue`).then((response) =>  response.json()).then((data)=>{
            console.log(data);
            setData(data);
        })
    },[])
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
              {data &&  data.book.map((book)=>{
                if(book.issued==0)
                {
                    return(
                        <tr>
                        <td>{data.userData.name}</td>
                        {/* <td>{da}</td> */}
                        <td>Book 1</td>
                        <td>2023-06-01</td>
                        <td><button>Add</button></td>
                    </tr>
                    )
                }
                    
                })}
                    
                </tbody>
            </table>
    </div>
  )
}

export default Issue