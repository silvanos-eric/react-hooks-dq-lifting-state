import React from "react";
import UserCard from "./UserCard";

function UserList({ userList, setCurrentUser }) {
  return (
    <div className="ui cards">
      {userList.map((user, index) => (
        <UserCard
          key={user.id}
          handleUserClick={() => setCurrentUser(index)}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
