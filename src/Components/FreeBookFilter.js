import React from "react";
import "./FreeBookFilter.css";

export default function FreebookFilter(props) {
  return (
    <div>
      <form>
        <select
          name="FreebookFilter"
          id="FreebookFilter"
          onChange={(e) => props.handleFilter(e, "filter")}
        >
          <option value="">Select...</option>
          <option value="free-ebooks">Free eBook Available</option>
          <option value="partial">Partial eBook Available</option>
          <option value="paid-ebooks">eBook For Sale Available</option>
        </select>
      </form>
    </div>
  );
}
