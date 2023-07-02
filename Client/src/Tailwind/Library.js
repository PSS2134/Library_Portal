import React from "react";
import { useState, useEffect } from "react";
import Fiction from "../Images/fiction.jpg";

function Library() {
  const [name, setName] = useState("");
  const email = JSON.parse(localStorage.getItem("user")).email;
  useEffect(() => {
    fetch(`http://localhost:5000/api/login?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
      });
  }, []);

  return (
    <div>
      <div className="py-10">
        <h1 className="px-3 py-3 m-2 font-normal font-mon text-5xl space-x-2">
          Hello! <span className="text-indigo-600">{name}</span>,{" "}
        </h1>
        <h1 className="px-3 py-3 m-2 text-slate-700 text-3xl space-x-2 ">
          Welcome to <span className="font-bold text-orange-500">Library</span>,
          Have a look!
        </h1>
      </div>
      <div className="px-4 py-6 m-2 flex justify-center hover:shadow-lg hover:shadow-cyan-800 bg- hover:rounded-lg">
        <div className="px-2">
          <img
            className="h-[100%] w-[55vw] rounded-2xl shadow-lg shadow-slate-700 cursor-pointer 
        hover:opacity-95"
            src={Fiction}
          />
        </div>
        <div className="px-5">
          <div>
            <h1 className="text-cyan-600 font-mon text-4xl space-x-2 font-semibold">
              Fiction
            </h1>
            <p className="text-xl h-full mt-6 space-x-2">
              Fiction books create imaginary worlds and characters, exploring
              various themes and narratives. They can range from contemporary
              fiction to historical epics, encompassing genres like literary
              fiction, dystopian novels, and coming-of-age stories. Fiction
              allows readers to escape reality and immerse themselves in
              captivating tales of imagination and human experiences.
            </p>
          </div>
          <div>
            <button
              className="block m-[2px] mt-7 auto bg-cyan-500 p-2 w-[8vw] rounded-2xl text-white 
         font-semibold text-lg shadow-lg shadow-slate-700 hover:bg-cyan-600 cursor-pointer
         active:shadow-none"
            >
              Dive In!
            </button>
          </div>
        </div>
      </div>
      <div className="h-1 w-[10%] block my-10 mx-auto  border-b-8 border-dotted border-indigo-700 "></div>
      <div className="px-3 py-3 m-2 flex justify-center">
        <div className="px-2">
          <img
            className="h-[100%] w-[55vw] rounded-2xl shadow-lg shadow-slate-700 cursor-pointer 
        hover:opacity-95"
            src={Fiction}
          />
        </div>
        <div className="px-5">
          <div>
            <h1 className="text-cyan-600 font-mon text-4xl space-x-2 font-semibold">
              Fiction
            </h1>
            <p className="text-xl h-full mt-6 space-x-2">
              Fiction books create imaginary worlds and characters, exploring
              various themes and narratives. They can range from contemporary
              fiction to historical epics, encompassing genres like literary
              fiction, dystopian novels, and coming-of-age stories. Fiction
              allows readers to escape reality and immerse themselves in
              captivating tales of imagination and human experiences.
            </p>
          </div>
          <div>
            <button
              className="block m-[2px] mt-7 auto bg-cyan-500 p-2 w-[8vw] rounded-2xl text-white 
         font-semibold text-lg shadow-lg shadow-slate-700 hover:bg-cyan-600 cursor-pointer
         active:shadow-none"
            >
              Dive In!
            </button>
          </div>
        </div>
      </div>
      <div className="h-1 w-[10%] block my-10 mx-auto  border-b-8 border-dotted border-indigo-700 "></div>
      <div className="px-3 py-3 m-2 flex justify-center">
        <div className="px-2">
          <img
            className="h-[100%] w-[55vw] rounded-2xl shadow-lg shadow-slate-700 cursor-pointer 
        hover:opacity-95"
            src={Fiction}
          />
        </div>
        <div className="px-5">
          <div>
            <h1 className="text-cyan-600 font-mon text-4xl space-x-2 font-semibold">
              Fiction
            </h1>
            <p className="text-xl h-full mt-6 space-x-2">
              Fiction books create imaginary worlds and characters, exploring
              various themes and narratives. They can range from contemporary
              fiction to historical epics, encompassing genres like literary
              fiction, dystopian novels, and coming-of-age stories. Fiction
              allows readers to escape reality and immerse themselves in
              captivating tales of imagination and human experiences.
            </p>
          </div>
          <div>
            <button
              className="block m-[2px] mt-7 auto bg-cyan-500 p-2 w-[8vw] rounded-2xl text-white 
         font-semibold text-lg shadow-lg shadow-slate-700 hover:bg-cyan-600 cursor-pointer
         active:shadow-none"
            >
              Dive In!
            </button>
          </div>
        </div>
      </div>
      <div className="h-1 w-[10%] block my-10 mx-auto  border-b-8 border-dotted border-indigo-700 "></div>
      <div className="px-3 py-3 m-2 flex justify-center">
        <div className="px-2">
          <img
            className="h-[100%] w-[55vw] rounded-2xl shadow-lg shadow-slate-700 cursor-pointer 
        hover:opacity-95"
            src={Fiction}
          />
        </div>
        <div className="px-5">
          <div>
            <h1 className="text-cyan-600 font-mon text-4xl space-x-2 font-semibold">
              Fiction
            </h1>
            <p className="text-xl h-full mt-6 space-x-2">
              Fiction books create imaginary worlds and characters, exploring
              various themes and narratives. They can range from contemporary
              fiction to historical epics, encompassing genres like literary
              fiction, dystopian novels, and coming-of-age stories. Fiction
              allows readers to escape reality and immerse themselves in
              captivating tales of imagination and human experiences.
            </p>
          </div>
          <div>
            <button
              className="block m-[2px] mt-7 auto bg-cyan-500 p-2 w-[8vw] rounded-2xl text-white 
         font-semibold text-lg shadow-lg shadow-slate-700 hover:bg-cyan-600 cursor-pointer
         active:shadow-none"
            >
              Dive In!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
