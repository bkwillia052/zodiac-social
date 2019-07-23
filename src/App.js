import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

let sdkClient = require("./sdk/sdk");

// make some dummy data in order to call vedic rishi api
var data = {
  date: 24,
  month: 9,
  year: 1991,
  hour: 1,
  minute: 25,
  latitude: 25,
  longitude: 82,
  timezone: 5.5
};

// api name which is to be called
var resource = "planets/tropical";
var resource2 = "general_house_report/tropical/saturn";
// call horoscope apis

class App extends Component {
  state = {};

  componentDidMount() {
    console.log("d", process.env);
    sdkClient.call(
      resource,
      data.date,
      data.month,
      data.year,
      data.hour,
      data.minute,
      data.latitude,
      data.longitude,
      data.timezone,
      function (error, result) {
        if (error) {
          console.log("Error returned!!");
        } else {
          console.log("Response has arrived from API server --");
          console.log(result);
        }
      }
    );
    sdkClient.call(
      resource2,
      data.date,
      data.month,
      data.year,
      data.hour,
      data.minute,
      data.latitude,
      data.longitude,
      data.timezone,
      function (error, result) {
        if (error) {
          console.log("Error returned!!");
        } else {
          console.log("Response has arrived from API server --");
          console.log(result);
        }
      }
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
