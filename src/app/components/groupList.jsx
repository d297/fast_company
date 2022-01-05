import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    contentProperty,
    valueProperty,
    onItemsSelect,
    selectedItem
}) => {
    console.log(items);
    console.log(Object.keys(items));
    return (
        <>
            <ul className="list-group">
                {Object.keys(items).map((item) => (
                    <li
                        key={items[item][valueProperty]}
                        className={
                            "list-group-item" +
                            (items[item] === selectedItem ? " active" : "")
                        }
                        onClick={() => onItemsSelect(items[item])}
                        role="button"
                    >
                        {items[item][contentProperty]}
                    </li>
                ))}
            </ul>
        </>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemsSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
