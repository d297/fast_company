import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User {...user} key={user._id} rest={rest} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
