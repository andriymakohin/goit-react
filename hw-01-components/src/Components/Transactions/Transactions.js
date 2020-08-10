import React from "react";
import "./Transactions.css";

const Transactions = ({ items }) => {
  return (
    <table class="transactionHistory">
      <thead>
        <tr className="head">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className="row" key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
