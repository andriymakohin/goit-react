import React from "react";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <div className="friends">
      {friends.map(friend => <li className="friends__item" key={friend.id}>
        {friend.isOnline ? <span className="status__on"></span> : <span className="status__off"></span>}
        <img className="friends__avatar"
          src={friend.avatar}
          alt={friend.name} width="48" />
        <p className="friends__name">{friend.name}</p>
      </li>)}
    </div>
  );
};

export default FriendList;
