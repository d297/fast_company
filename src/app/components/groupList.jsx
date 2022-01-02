import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    const checkFormatItems = (items) => {
        if (Array.isArray(items)) {
            console.log(Array.isArray(items));
            return items;
        }
        console.log(typeof items);
        return Object.values(items);
    };
    const checkedData = checkFormatItems(items);
    console.log("valueProperty", valueProperty);
    console.log("contentProperty", contentProperty);
    console.log("selectedItem", selectedItem);
    console.log(checkedData);
    return (
        <ul className="list-group">
            {checkedData.map((item) => (
                <li
                    className={
                        "list-group-item" +
                        (item === selectedItem ? " active" : "")
                    }
                    key={item._id}
                    onClick={() => onItemSelect(item)}
                    role={"button"}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    contentProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
