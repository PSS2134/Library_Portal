import React from "react";

function searchbar() {
  return (
    <div
      style={{
        width: "30%",
        display: "block",
        // margin: "0 auto",
        padding: "0 35% 0 35%",
      }}
    >
      <input
        className="book-search"
        type="text"
        placeholder="Search Your Book"
        style={{ width: "300px" }}
      />
    </div>
  );
}

export default searchbar;
