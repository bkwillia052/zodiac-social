import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignImage from "./components/SignImage";

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
var signReportURL = "sun_sign_prediction/daily/";
let signs = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces"
];


class App extends Component {
  state = {
    reports: []
  };

  getSignReports = result => {
    console.log(result);
    this.setState({
      reports: [...this.state.reports, JSON.parse(result)]
    });
  };

  componentDidMount() {
    console.log("d", process.env);
    let pArr = [];
    let context = this;
    signs.forEach(sign => {
      sdkClient.call(
        signReportURL + sign,
        data.date,
        data.month,
        data.year,
        data.hour,
        data.minute,
        data.latitude,
        data.longitude,
        data.timezone,
        function(error, result) {
          if (error) {
            console.log("Error returned!!");
          } else {
            console.log("Response has arrived from API server --");
            context.getSignReports(result);
          }
        }
      );
    });
  }
  render() {
    return (
      <div className="App">
        <div className="main-page-top">
        <nav>
          <div>ZODIAC SOCIAL</div>
          <ul>
            <li>Sign Up</li>
            <li>Sign</li>
          </ul>
        </nav>
        </div>
        <div className="main-page-bottom">
          <div className="sign-icon-cont">
            {signs.map(sign => {
              return <SignImage sign={sign} />;
            })}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
