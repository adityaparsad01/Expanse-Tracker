import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transection } from "./Transection";
export const TransectionList = () => {
  const { transection } = useContext(GlobalContext);

  return (
    <>
      <h3>इतिहास</h3>
      <ul className="list">
        {transection.map((transection) => (
          <Transection key={transection.id} transection={transection} />
        ))}
      </ul>
    </>
  );
};
