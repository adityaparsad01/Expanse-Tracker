import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpance } from "./components/IncomeExpance";
import { TransectionList } from "./components/TransectionList";
import { AddTransection } from "./components/AddTransection";

import { GlobalProvider } from "./context/GlobalState";

export default class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpance />
          <TransectionList />
          <AddTransection />
        </div>
      </GlobalProvider>
    );
  }
}
