import React from "react";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item, e) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    const selectArrow = (path) => {
        console.log("Path = ", path);
        console.log("selectedSort.path = ", selectedSort.path);
        if (path === selectedSort.path && selectedSort.path !== undefined) {
            return selectedSort.order == "asc" ? (
                <i className="bi bi-caret-up-fill"></i>
            ) : (
                <i className="bi bi-caret-down-fill"></i>
            );
        }
    };
    return (
        <>
            <thead>
                <tr>
                    {Object.keys(columns).map((column) => (
                        <th
                            key={column}
                            onClick={
                                columns[column].path
                                    ? () =>
                                          handleSort(
                                              columns[column].path,
                                              column
                                          )
                                    : undefined
                            }
                            {...{ role: columns[column].path && "button" }}
                            scope="col"
                        >
                            {columns[column].name}
                            {selectArrow(columns[column].path)}
                        </th>
                    ))}
                    {/*
                            <th scope="col">Качества</th>
                            <th
                                onClick={() => handleSort("profession.name")}
                                scope="col"
                            >
                                Профессия
                            </th>
                            <th
                                onClick={() => handleSort("completedMeetings")}
                                scope="col"
                            >
                                Встретился, раз
                            </th>
                            <th onClick={() => handleSort("rate")} scope="col">
                                Оценка
                            </th>
                            <th onClick={() => handleSort("bookmark")} scope="col">
                                Избранное
                            </th>
                            <th />
                        */}
                </tr>
            </thead>
        </>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
