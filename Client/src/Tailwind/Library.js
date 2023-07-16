import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fiction from "../Images/fiction.jpg";
import "../Styles/Library.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HashLoader from "react-spinners/HashLoader";

const libArray = [
  {
    title: "Competitive",
    des: `Whether you're a student, a professional, or just someone who
     enjoys a challenge, our competitive books will help you improve your
      skills and knowledge.So whether you're looking to ace your next test, 
      land your dream job, or just become a better person, our competitive 
      books can help you achieve your goals.`,
    url: "https://th.bing.com/th/id/OIP.tPpcG9A8uMNXGTX8BdXqQgAAAA?pid=ImgDet&rs=1",
  },
  {
    title: "Fiction",
    des: `Fiction books create imaginary worlds and characters, exploring
          various themes and narratives. They can range from contemporary
          fiction to historical epics, encompassing genres like literary
        fiction, dystopian novels, and coming-of-age stories. Fiction
        allows readers to escape reality and immerse themselves in
            captivating tales of imagination and human experiences.`,
    url: Fiction,
  },
  {
    title: "Autobiography",
    des: `Learn about the lives of some of the most fascinating people in
     history with our selection of autobiographies. From celebrities to politicians
      to everyday people, these books offer a unique glimpse into the lives of others.
      With our wide selection of autobiographies, you're sure to find someone whose story 
      resonates with you. So pick up a book and learn from the experiences of others.`,
    url: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTczOTEwODA5Mzg1MTgyMjcy/thegenreofautobiography.webp",
  },
  {
    title: "Others",
    des: `Our "Others" category includes books that don't fit neatly into any other genre.
     Here you'll find everything from cookbooks to travel guides to self-help books.
     Our "Others" category is a great place to find books that are both informative and 
     entertaining. So browse our selection and find something that interests you.
     So explore our "Others" category and find something new to read. You might just be 
     surprised at what you find.`,
    url: "https://i.pinimg.com/originals/34/ba/f3/34baf3aa9a80bf82a2f53e1602df97cc.png",
  },
];

function Library({ updateUser, updateAdmin}) {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("Admin");
  const user = JSON.parse(localStorage.getItem("user"));
  let email;
    // console.log(user);
    useEffect(() => {
      if(user){
        email=user.email;
        fetch(`https://backendlibrary.onrender.com/api/login?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setName(data.name);
        });
      }
      setTimeout(() => {
        setLoading(false);
      }, 1250);
      
    }, []);
  

  return (
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
          <Navbar updateUser={updateUser} updateAdmin={updateAdmin} />
          <div className="library-body">
            <h1 className=" library-heading">
              Hello!{" "}
              <span className="text-indigo-600 library-name">{name}</span>,{" "}
            </h1>
            <h1 className="px-3 py-3 m-2 text-slate-700 text-3xl space-x-2 library-subheading">
              Welcome to{" "}
              <span className="font-bold text-orange-500 library-Lib">
                Library
              </span>
              , Have a look!
            </h1>
          </div>
          {libArray.map((data) => {
            return (
              <div>
                <div className="px-4 py-6 m-2 flex justify-center hover:shadow-lg hover:shadow-cyan-800 bg- hover:rounded-lg library-card">
                  <div className="px-2 libary-img-div">
                    <img
                      className=" library-img h-[100%] w-[55vw] rounded-2xl shadow-lg shadow-slate-700 cursor-pointer 
        hover:opacity-95"
                      src={data.url}
                    />
                  </div>
                  <div className=" px-5" style={{ padding: "0 1.25rem" }}>
                    <div>
                      <h1
                        className="text-cyan-600 font-mon text-4xl space-x-2 font-semibold"
                        style={{
                          color: " rgb(124 58 237)",
                          fontSize: "2.25rem",
                          lineHeight: "2.5rem",
                          fontFamily: "Poppins",
                          margin: "0 0 0 0.5rem",
                          fontWeight: "600",
                        }}
                      >
                        {data.title}
                      </h1>
                      <p
                        className="text-xl h-full mt-6 space-x-2"
                        style={{
                          fontSize: "1.25rem",
                          lineHeight: "1.75rem",
                          height: "100%",
                          margin: "1.5rem 0 0 0.5rem",
                          fontFamily: "Poppins",
                        }}
                      >
                        {data.des}
                      </p>
                    </div>
                    <div>
                      <Link to={`/library/${data.title}`}>
                        <button 
                          className="block m-[2px] mt-7 auto bg-cyan-500 p-2 w-[8vw] rounded-2xl text-white 
         font-semibold text-lg shadow-lg shadow-slate-700 hover:bg-cyan-600 cursor-pointer
         active:shadow-none library-btn"
                        >
                          Dive In!
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="h-1 w-[10%] block my-10 mx-auto  border-b-8 border-dotted border-indigo-700 "
                  style={{
                    height: "1.25rem",
                    width: "8%",
                    margin: "2.5rem auto",
                    borderBottom: "1rem dotted rgb(55 48 163)",
                  }}
                ></div>
                
              </div>
            );
          })}
          <Footer />
        </>
      )}
    </>
  );
}

export default Library;
