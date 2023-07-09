import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./user.css";
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Delete from "../../Images/delete.svg";

function User() {
  const [data, setData] = useState({});
  const [picture, setPicture] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [loading, setLoading] = useState(true);
  let [approvecount, setApproveCount] = useState(0);
  const email = JSON.parse(localStorage.getItem("user")).email;
  const pending = async () => {
    try {
      const res = await fetch(`/api/books?email=${email}`, {
        method: "POST",
        body: email,
      });
      const data = await res.json();
      console.log(data);
      if (data === "1") {
        toast.warning("You have 1 book issued");
      } else if (data === "2") {
        toast.warning("You have 2 books issued");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch(`/api/profile?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setTimeout(() => {
          setLoading(false);
        }, 1250);
        pending();
      });
  }, []);
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
      console.log(urlData.url);
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
    const res = await fetch("/api/image", {
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
    const res = await fetch(`/api/remove?email=${email}&id=${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data == "deleted") {
      toast.success("Deleted Successfully");
      window.location.reload();
    }
  };
  return (
    <div className="user-loading">
      <>
        {loading ? (
          <div className="loading">
            <HashLoader
              color={"#F37A24"}
              loading={loading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <>
            <div className="user">
              <Navbar />`{console.log(data.userData.picture)}`
              <div className="user-profile">
                <div className="box">
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
                      <button className="uploadbutton" onClick={handleImage}>
                        Upload Image
                      </button>
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
                    <h1 className="Issued-books">Issued Books</h1>
                    <table>
                      <thead>
                        <tr>
                          <th>Book ID</th>
                          <th>Book Name</th>
                          <th>Book Genre</th>
                          <th>Issue Date</th>
                          <th>Issue Time</th>
                          <th>Return Date</th>
                          <th>Action</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.book.map((book) => {
                          {
                            /* const datenew=book.date.toLocaleDateString();
                            const time=book.date.toLocaleString(); */
                          }
                          {
                            /* console.log(book.date) */
                          }
                          {
                            /* let month=book.date.getMonth()
                            const datereturn=book.date.setMonth(month-1); */
                          }
                          let approved;
                          if (book.issued) {
                            approved = true;
                          }

                          return (
                            <tr>
                              <td>{book.id}</td>
                              <td>{book.name}</td>
                              <td>{book.genre}</td>
                              <td>{book.issuedate}</td>
                              <td>{book.issuetime}</td>
                              <td>{book.returndate}</td>

                              {approved ? (
                                <>
                                  <td>
                                    <button
                                      style={{
                                        cursor: "pointer",
                                        backgroundColor: "red",
                                        color: "white",
                                        fontWeight: "600",
                                        padding: "5px",
                                        border: "none",
                                        borderRadius: "5px",
                                      }}
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
                                  <td>
                                    <img
                                      style={{ cursor: "pointer" }}
                                      onClick={handleRemove}
                                      name={book.id}
                                      src={Delete}
                                    />
                                  </td>
                                  <td
                                    style={{ color: "blue", fontWeight: "600" }}
                                  >
                                    Pending
                                  </td>
                                </>
                              )}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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
