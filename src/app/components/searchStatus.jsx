import React from "react";

const SearchStatus = ({ length }) => {
  const RenderPhrase = (length) => {
    const lastOne = Number(length.toString().slice(-1));

    if (length > 4 && length < 15) {
      return "Человек тусанет";
    }
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "Человека тусанут";
    if (lastOne === 1) return "Человек тусанет";
  };
  return (
    <h2>
      <span className={"badge bg-" + (length > 0 ? "primary" : "danger")}>
        {length > 0
          ? `${length} ${RenderPhrase(length)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

export default SearchStatus;

// статус про кол-во пользователей
