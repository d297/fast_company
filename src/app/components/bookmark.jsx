import React from "react";

const Bookmark = ({ status, id, ...rest }) => {
  return (
    <button onClick={() => rest.onToogleBookMark(id)}>
      <i className={status ? "bi bi-bookmark-fill" : "bi bi-bookmark"}></i>
    </button>
  );
};

export default Bookmark;
