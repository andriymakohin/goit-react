import React from "react";
import "./App.css";

import usersCard from "./bd/user.json";
import statisticalData from "./bd/statistical-data.json";
import friends from "./bd/friends.json";
import transactions from "./bd/transactions.json";

import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import Transactions from "./Components/Transactions/Transactions";
import FriendList from "./Components/FriendList/FriendList";

function App() {
  return (
    <>
      <Profile
        name={usersCard.name}
        tag={usersCard.tag}
        location={usersCard.location}
        avatar={usersCard.avatar}
        stats={usersCard.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
}

export default App;
