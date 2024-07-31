import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { userListData } from "../data/data";

function TweetsContainer() {
  const [currentUser, setCurrentUser] = useState(0);

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList
            userListData={userListData}
            setCurrentUser={setCurrentUser}
          />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={userListData[currentUser]} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
