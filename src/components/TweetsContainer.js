import React, { useState } from "react";

import _ from "lodash";

import TweetList from "./TweetList";
import UserList from "./UserList";
import { userListData } from "../data/data";

function TweetsContainer() {
  const [currentUser, setCurrentUser] = useState(0);
  const [userList, setUserList] = useState(userListData);

  function handleTweetLike(user, tweetId) {
    const userCopy = _.cloneDeep(user);
    const likedTweet = userCopy.tweets.find((t) => t.id === tweetId);
    likedTweet.favorite_count = likedTweet.favorite_count + 1;

    const userListCopy = _.cloneDeep(userList);
    const updatedUserList = userListCopy.map((user) =>
      user.id === userCopy.id ? userCopy : user
    );
    setUserList(updatedUserList);
  }

  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList userList={userList} setCurrentUser={setCurrentUser} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList
            user={userList[currentUser]}
            handleTweetLike={handleTweetLike}
          />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
