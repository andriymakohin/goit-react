import React from "react";
import PropTypes from 'prop-types';
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

FriendList.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.string,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};



export default FriendList;
