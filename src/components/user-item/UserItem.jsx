import React from "react";
import "./user-item.css";
function UserItem({
  id,
  image,
  firstName,
  lastName,
  age,
  from,
  job,
  deletUsers,
}) {
  return (
    <div className="user__card">
      <img src={image} alt="firstName" />
      <div className="user__card--body">
        <h2>
          {firstName} {lastName},{age}age.
        </h2>
        <p>job:{job}</p>
        <p>From:{from}</p>
        <button onClick={() => deletUsers(id)}>Delete</button>
      </div>
    </div>
  );
}

export default UserItem;
