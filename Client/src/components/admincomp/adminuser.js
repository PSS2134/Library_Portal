import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Navbar from "../../components/navbar/navbar";
// import Footer from "../../components/footer/footer";
import "../../Pages/user/user.css";
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Delete from "../../Images/delete.svg";

function User() {
  const { email } = useParams();
  const [data, setData] = useState({});
  //   const [picture, setPicture] = useState(null);
  //   const [imagePreview, setImagePreview] = useState(null);

  const [loading, setLoading] = useState(true);
  //   let [approvecount, setApproveCount] = useState(0);

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

  window.onload = function () {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
      sessionStorage.removeItem("reloading");
      refresher();
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
          <div style={{padding:"11vh",backgroundColor:"lightcyan",height:"78vh"}}>
            <h1 style={{textAlign:"center"}}>USER-PROFILE</h1>
            <div className="user" >
              {/* <Navbar updateUser={updateUser} /> */}
              {/* {console.log(data.userData.picture)}` */}
              <div className="user-profile" style={{"marginTop":"3%"}}> 
                <div className="box">
                  <div className="profile-box">
                    <div className="signup-profile-pic__container">
                      <img
                        src={data.userData.picture}
                        className="signup-profile-pic"
                      />
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

               
              </div>
              <div style={{"position":"fixed","bottom":"0","width":"100%"}}>
              
              </div>
             
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default User;
