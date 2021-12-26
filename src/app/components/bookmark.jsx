import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, id, ...rest }) => {
    return (
        <button onClick={() => rest.onToogleBookMark(id)}>
            <i
                className={status ? "bi bi-bookmark-fill" : "bi bi-bookmark"}
            ></i>
        </button>
    );
};
Bookmark.propTypes = {
    status: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};

export default Bookmark;
