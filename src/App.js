import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Letter from "./components/letter";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header" /> */}
        {/* <Envelope /> */}
        <Letter />
      </div>
    );
  }
}

export default App;
