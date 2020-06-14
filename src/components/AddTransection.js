import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransection = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransection } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransection = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransection(newTransection);
  };

  return (
    <>
      <h3>नया लेनदेन जोड़ें</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">कारण</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="लेन-देन का कारण ..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            रकम <br />
            (नकारात्मक - व्यय, सकारात्मक - आय)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="राशी डालें..."
          />
        </div>
        <button className="btn">लेन-देन जोड़ें</button>
      </form>
    </>
  );
};
