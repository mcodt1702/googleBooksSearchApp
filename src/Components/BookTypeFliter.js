import React from "react";

export default function BookTypeFilter(props) {
  return (
    <select
      name="bookType"
      id="typeFilter"
      onChange={(e) => props.handleFilter(e, "printType")}
    >
      {" "}
      <option value="all">All Types Available</option>
      <option value="books">Only Books</option>
      <option value="magazines">Only Magazines</option>
    </select>
  );
}
