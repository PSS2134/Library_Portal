import React, { useEffect, useState } from "react";
import "./admincomp.css";
import { Link } from "react-router-dom";
import AdminUser from "./adminuser";

function Requested({ allBooks }) {
  console.log(allBooks);
  const handleApprove = async (e) => {
    const unique_id = e.target.name;

    const res = await fetch(`https://backendlibrary.onrender.com/api/admin/${unique_id}?action=issued`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data == "issued") {
      window.location.reload();
    }
  };
  return (
    <div>
      <div className="zinda-hoon">
        <table className="table">
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
            {allBooks.map((book) => {
              if (book.issued == 0) {
                return (
                  <tr>
                    <td>
                      <a href={`/adminuser/${book.email}`}>
                        {book.username}
                      </a>
                    </td>
                    <td>{book.bookid}</td>
                    <td>
                      <a href={`/library/${book.genre}/${book.bookid}`}>
                        {book.bookname}
                      </a>
                    </td>
                    <td>{book.genre}</td>
                    <td>{book.issuedate}</td>
                    <td>{book.issuetime}</td>
                    <td>
                      <button
                        className="approve-btnn"
                        name={book._id}
                        onClick={handleApprove}
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Requested;
