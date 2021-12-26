import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  rest,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((item) => (
          <Qualitie {...item} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>{<Bookmark status={bookmark} {...rest} id={_id} />}</td>
      <td>
        <button className="btn btn-danger" onClick={() => rest.onDelete(_id)}>
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default User;
