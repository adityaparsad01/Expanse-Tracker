import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transection } = useContext(GlobalContext);

  const amounts = transection.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>आपका शेष राशि</h4>
      <h1>₹{total}</h1>
    </>
  );
};
