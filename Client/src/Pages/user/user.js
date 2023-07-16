import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./user.css";
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Delete from "../../Images/delete.svg";

function User({ updateUser,updateAdmin }) {
  const [data, setData] = useState({});
  const [order,setOrder]=useState([]);
  const [picture, setPicture] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [loading, setLoading] = useState(true);
  let [approvecount, setApproveCount] = useState(0);
  const email = JSON.parse(localStorage.getItem("user")).email;

  useEffect(() => {
    fetch(`https://backendlibrary.onrender.com/api/profile?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setTimeout(() => {
          setLoading(false);
        }, 1250);
      });
  }, []);

  useEffect(() => {

    fetch(`https://backendlibrary.onrender.com/api/order?email=${email}`).then(res=>res.json()).then(data=>{
      console.log(data);
      setOrder(data);
    })

  },[])

  const refresher = () => {
    sessionStorage.setItem("reloading", true);
    // document.location.reload();
    let cnt = 0;
    console.log(data.book);
    data.book.map((singleBook) => {
      if (singleBook.issued === 1) cnt++;
    });
    toast.warning(`You have ${cnt} book issued`);
  };

  window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
      sessionStorage.removeItem("reloading");
      refresher();
    }
  };
  // toast.success(`You have ${approvecount} approved! Start reading them...`);
  //     console.log(data);
  //    {data.book && data.book.map((singleBook)=>{
  //     if(singleBook.issued && !singleBook.returned)
  //     {
  //        setApproveCount(approvecount=>approvecount+1);
  //     }

  // })}
  // console.log(data);
  //   for picture

  // for image uploading
  const postDetails = async (picture) => {
    setLoading(true);
    if (picture == undefined) {
      toast.warning("Please Upload a image");
      setLoading(false);
      return;
    } else if (picture.size >= 1048576) {
      toast.warning("The size of image is greater than 1mb");
      setLoading(false);
      return;
    }
    const data = new FormData();
    data.append("file", picture);
    data.append("upload_preset", "p8ei2gym");
    try {
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dchb3iesp/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      // console.log(urlData.url);
      setPicture(urlData.url.toString());
      setLoading(false);
      setImagePreview(URL.createObjectURL(picture));
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  //   console.log(imagePreview);
  const handleImage = async (e) => {
    const res = await fetch("https://backendlibrary.onrender.com/api/image", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, picture }),
    });
    const data = await res.json();
    if (data === "image Uploaded succesfully") {
      setLoading(false);
      window.location.reload();
      toast.success("Image uploaded successfully");
    } else {
      setLoading(false);
      toast.error("Try again!");
    }
  };
  const handleRemove = async (e) => {
    console.log(e.target);
    const id = e.target.name;
    const res = await fetch(`https://backendlibrary.onrender.com/api/remove?email=${email}&id=${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data == "deleted") {
      toast.success("Deleted Successfully");
      window.location.reload();
    }
  };

  const handleReturn = async (e) => {
    // console.log(e.target.name);
    const bookid = e.target.name;
    const returndate = new Date().toLocaleDateString();
    const res = await fetch(
      `https://backendlibrary.onrender.com/api/return/?email=${email}&id=${bookid}&${returndate}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    if (data == "returned") {
      toast.success("Returned Successfully");
      window.location.reload();
    }
  };
  // console.log(data.book);
  //   const notreturned=data.book.filter((book)=>{
  //     if(!book.returned)
  //     {
  //         return book;
  //     }
  //   })
  //   console.log(notreturned);

  return (
    <div className="user-loading">
      <>
        {loading ? (
          <div className="loading">
            <HashLoader
              color={"green"}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            <div className="user">
              <Navbar updateUser={updateUser} updateAdmin={updateAdmin}  />
              {/* {console.log(data.userData.picture)}` */}
              <div className="user-profile">
                <div className="box">
                  <div className="profile-box">
                    <div className="signup-profile-pic__container">
                      <img
                        src={imagePreview || data.userData.picture}
                        className="signup-profile-pic"
                      />
                      <label
                        htmlFor="image-upload"
                        className="image-upload-label"
                      >
                        <i className="fas fa-plus-circle add-picture-icon"></i>
                      </label>
                      <input
                        type="file"
                        id="image-upload"
                        hidden
                        accept="image/png, image/jpeg"
                        onChange={(e) => postDetails(e.target.files[0])}
                      />
                      <div className="img-box">
                        {picture && (
                          <button
                            className="uploadbutton"
                            onClick={handleImage}
                          >
                            Save
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="user-desc" style={{ fontSize: "1rem" }}>
                    <h3 className="student-information">
                      Name : {data.userData.name}{" "}
                    </h3>
                    <h3 className="student-information">
                      Contact : {data.userData.contact}{" "}
                    </h3>
                    <h3 className="student-information">
                      Email : {data.userData.email}{" "}
                    </h3>
                    <h3 className="student-information">
                      Room No. : {data.userData.room}
                    </h3>
                    {/* <h3 className='student-information'>Roll No. : {1}</h3> */}
                    <h3 className="student-information">
                      Course : {data.userData.course}
                    </h3>
                    <h3 className="student-information">
                      Year : {data.userData.year}
                    </h3>
                    <h3 className="student-information">Hostel : Lohit </h3>
                  </div>
                </div>

                {data.book && data.book.length ? (
                  <div className="user-books">
                    <h1 className="Issued-books">Requested Books</h1>
                    <div className="zinda-hoon-2" >
                    <table>
                      <thead>
                        <tr>
                          <th>Book ID</th>
                          <th>Book Name</th>
                          <th>Book Genre</th>
                          <th>Issue Date</th>
                          <th>Issue Time</th>
                          <th>Expected Return Date</th>
                          <th>Action</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.book.map((book) => {
                          let issued,
                            returned,
                            return_req = false;
                          if (book.return_requested) {
                            return_req = true;
                          }
                          if (book.issued && !book.returned) {
                            issued = true;
                            returned = false;
                          } else if (!book.issued && !book.returned) {
                            issued = false;
                            returned = false;
                          } else {
                            issued = true;
                            returned = true;
                          }
                          {
                            /* console.log(book.returndate); */
                          }
                          console.log(issued, returned);
                          if (!returned) {
                            return (
                              <tr>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.genre}</td>
                                <td>{book.issuedate}</td>
                                <td>{book.issuetime}</td>
                                <td>{book.returndate}</td>

                                {issued && !returned && !return_req ? (
                                  <>
                                    <td>
                                      <button className="return-btnz"
                                        style={{
                                          cursor: "pointer",
                                          backgroundColor: "red",
                                          color: "white",
                                          fontWeight: "600",
                                          padding: "5px",
                                          border: "none",
                                          borderRadius: "5px",
                                        }}
                                        onClick={handleReturn}
                                        name={book.id}
                                      >
                                        Return
                                      </button>
                                    </td>
                                    <td
                                      style={{
                                        color: "green",
                                        fontWeight: "600",
                                      }}
                                    >
                                      Issued
                                    </td>
                                  </>
                                ) : (
                                  <>
                                    {!issued && !return_req && !returned ? (
                                      <>
                                        <td>
                                          <img
                                            className="delete-image-btn"
                                            style={{ cursor: "pointer" }}
                                            onClick={handleRemove}
                                            name={book.id}
                                            src={Delete}
                                          />
                                        </td>
                                        <td
                                          style={{
                                            color: "blue",
                                            fontWeight: "600",
                                          }}
                                        >
                                          Pending
                                        </td>
                                      </>
                                    ) : (
                                      <>
                                      <td
                                        style={{
                                          color: "red",
                                          fontWeight: "600",
                                        }}
                                      >
                                        Returning
                                      </td>
                                      <td
                                          style={{
                                            color: "blue",
                                            fontWeight: "600",
                                          }}
                                        >
                                          Pending
                                        </td>
                                        </>
                                    )}
                                    <>{returned && <td>Returned</td>}</>
                                  </>
                                )}
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                    </div>
                  </div>
                ) : (
                  <h1
                    style={{
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      padding: "1%",
                      color: "orange",
                    }}
                  >
                    You Have no books
                  </h1>
                )}
                {data.book && data.book.length ? (
                  <div className="user-books">
                    <h1 className="Issued-books">Past Issued Books</h1>
                    <div className="zinda-hoon-2" >
                    <table>
                      <thead>
                        <tr>
                          <th>Book ID</th>
                          <th>Book Name</th>
                          <th>Book Genre</th>
                          <th>Issue Date</th>
                          <th>Expected Return</th>
                          <th> Return Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.book.map((book) => {
                          const issue_date = book.issuedate;

                          let year1 = issue_date.slice(5, 9);
                          let month1 = issue_date.slice(3, 4);
                          let newmonth = Number(month1) + 1;
                          if (newmonth == 13) {
                            year1 = Number(year1) + 1;
                            newmonth = 1;
                          }
                          const days1 = issue_date.slice(0, 2);
                          if (book.returned) {
                            return (
                              <tr>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.genre}</td>
                                <td>{book.issuedate}</td>
                                <td>
                                  {days1}/{newmonth}/{year1}
                                </td>
                                <td>{book.returndate}</td>
                                <td
                                  style={{
                                    color: "blueviolet",
                                    fontWeight: "600",
                                  }}
                                >
                                  Returned
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                    </div>
                  </div>
                ) : (
                  <h1
                    style={{
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      padding: "1%",
                      color: "orange",
                    }}
                  >
                    You haven't issued any book yet
                  </h1>
                )}
                {order && order.length  ? (
                  <div className="user-books">
                    <h1 className="Issued-books">Added Books</h1>
                    <div className="zinda-hoon-2" >
                    <table>
                      <thead>
                        <tr>
                          <th>Book Name</th>
                          <th>Book Genre</th>
                          <th>Author</th>
                          <th>Requested Date</th>
                          <th>Status</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        {order.length&&order.map((book) => {
                         
                            return (
                              <tr>
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
                                </td>:<td style={{
                                    color: "blue",
                                    fontWeight: "600",
                                  }}>Pending</td>}   
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                    </div>
                  </div>
                ) : (
                  <h1
                    style={{
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      padding: "1%",
                      color: "orange",
                    }}
                  >
                    You haven't Added any book yet
                  </h1>
                )}
              </div>
              <Footer />
            </div>
          </>
        )}
      </>
    </div>
  );
}

export default User;
