/*flow*/
import React, { Component } from "react";
import RepoBrowser from "./containers/RepoBrowser";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="body">
        <RepoBrowser />
      </div>
    );
  }
}

export default App;
