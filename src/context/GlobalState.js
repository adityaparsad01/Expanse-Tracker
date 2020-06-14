import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State

const initialState = {
  transection: [],
};

//create context

export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransection(id) {
    dispatch({
      type: "DELETE_TRANSECTION",
      payload: id,
    });
  }

  function addTransection(transection) {
    dispatch({
      type: "ADD_TRANSECTION",
      payload: transection,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transection: state.transection,
        deleteTransection,
        addTransection,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
