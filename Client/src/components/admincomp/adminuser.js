import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
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
    fetch(`/api/profile?email=${email}`)
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
          <>
            <div className="user">
              {/* <Navbar updateUser={updateUser} /> */}
              {/* {console.log(data.userData.picture)}` */}
              <div className="user-profile">
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

                {data.book && data.book.length ? (
                  <div className="user-books">
                    <h1 className="Issued-books">Requested Books</h1>
                    <div className="zinda-hoon-2">
                      <table>
                        <thead>
                          <tr>
                            <th>Book ID</th>
                            <th>Book Name</th>
                            <th>Book Genre</th>
                            <th>Issue Date</th>
                            <th>Issue Time</th>
                            <th>Expected Return Date</th>
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
                    User has no books
                  </h1>
                )}
                {data.book && data.book.length ? (
                  <div className="user-books">
                    <h1 className="Issued-books">Past Issued Books</h1>
                    <div className="zinda-hoon-2">
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
                    User haven't issued any book yet
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
