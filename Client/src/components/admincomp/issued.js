import React from "react";
import "./admincomp.css";
import { Link } from "react-router-dom";

function Issued({ allBooks }) {
  const handleApprove = async (e) => {
    const unique_id = e.target.name;
    console.log(unique_id);

    const res = await fetch(`https://backendlibrary.onrender.com/api/admin/${unique_id}/?action="returned"`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data == "returned") {
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
              <th>Expected Return Date</th>
              <th>Return Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.toReversed().map((book) => {
              {
                /* console.log(year1); */
              }
              {
                /* const month1 = issue_date.slice(); */
              }
              if (book.issued && !book.returned && book.return_requested) {
                const issue_date = book.issuedate;

                let year1 = issue_date.slice(5, 9);
                let month1 = issue_date.slice(3, 4);
                let newmonth = Number(month1) + 1;
                if (newmonth == 13) {
                  year1 = Number(year1) + 1;
                  newmonth = 1;
                }
                const days1 = issue_date.slice(0, 2);

                return (
                  <>
                    <tr>
                      <td>
                        
                          <Link style={{"textDecoration":"none"}} to={`/adminuser/${book.email}`}>
                            {book.username}
                          </Link>
                        
                      </td>
                      <td>{book.bookid}</td>
                      <td>
                        <Link style={{"textDecoration":"none"}} to={`/library/${book.genre}/${book.bookid}`}>
                          {book.bookname}
                        </Link>
                      </td>
                      <td>{book.genre}</td>
                      <td>{book.issuedate}</td>
                      <td>
                        {days1}/{newmonth}/{year1}
                      </td>
                      <td>{book.returndate}</td>
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
                  </>
                );
              } else if (book.issued && !book.returned) {
                return (
                  <>
                    <tr>
                      <td>
                        <Link to={`/adminuser/${book.email}`}>
                          {book.username}
                        </Link>
                      </td>
                      <td>{book.bookid}</td>
                      <td>
                        <Link to={`/library/${book.genre}/${book.bookid}`}>
                          {book.bookname}
                        </Link>
                      </td>
                      <td>{book.genre}</td>
                      <td>{book.issuedate}</td>

                      <td>{book.returndate}</td>
                      <td>NIL</td>
                      <td style={{ color: "red", fontWeight: "600" }}>
                        Not Returned yet
                      </td>
                    </tr>
                  </>
                );
              } else if (book.issued && book.returned) {
                const issue_date = book.issuedate;

                let year1 = issue_date.slice(5, 9);
                let month1 = issue_date.slice(3, 4);
                let newmonth = Number(month1) + 1;
                if (newmonth == 13) {
                  year1 = Number(year1) + 1;
                  newmonth = 1;
                }
                const days1 = issue_date.slice(0, 2);
                return (
                  <>
                    <tr>
                      <td>
                        <Link to={`/adminuser/${book.email}`}>
                          {book.username}                        </Link>
                      </td>
                      <td>{book.bookid}</td>
                      <td>
                        <Link to={`/library/${book.genre}/${book.bookid}`}>
                          {book.bookname}
                        </Link>
                      </td>
                      <td>{book.genre}</td>
                      <td>{book.issuedate}</td>
                      <td>
                        {days1}/{newmonth}/{year1}
                      </td>
                      <td>{book.returndate}</td>

                      <td style={{ color: "red", fontWeight: "600" }}>
                        Returned
                      </td>
                    </tr>
                  </>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Issued;
