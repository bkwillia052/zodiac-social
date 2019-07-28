import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignImage from "./components/SignImage";
import HomePageReport from "./components/HomePageReport";

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
    reports: [],
    selected: ""
  };

  getSignReports = result => {
    console.log(result);
    this.setState({
      reports: [...this.state.reports, JSON.parse(result)]
    });
  };

  selectSign = sign => {
    if (this.state.selected === sign) {
      this.setState({
        selected: ""
      });
    } else {
      this.setState({
        selected: sign
      });
    }
  };

  componentDidMount() {
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
    const { reports, selected } = this.state;
    return (
      <div className="App">
        <div className="svg-bg" />
        <div className="black-bg" />
        <div className="white-bg" />
        <div className="main-page-top">
          <nav>
            <div className="logo">
              ZODIAC SOCIAL
              <div className="logo-border">
                <svg
                  className="sun-svg"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 1000"
                >
                  <title>sun</title>
                  <path d="M756.3,598.28l101.77-3.59.19-1.07-87.12-53.19.59-2,191.5-39.71-.06-.75L771.41,459.19l-.25-2L858.22,403l-.45-1.09-101.27-2.6-.38-1.93,144.51-129-.56-1.24L715.21,328.26l-.85-1.48,48.43-89.89-.92-.7-90,48.43-1.22-1.27L731.84,98.45l-1-.55-130.16,147-1.17-.73L597,141.06l-1.17-.32-53.05,87-1.92-.45L501,35.71l-.81.07L460.35,227.54l-2,.16L405,140l-.87.32L400.6,243.8l-1.53.75L269.2,98.05l-1,.81,62.38,184.92-1,1-90.32-48.7-.79.81L287,327l-1.35,1.16L99.53,267l-.64,1L245.62,398.14l-.67,1.22-101.71,2.5-.35,1.09,86,54.33-.25,2L37.72,497.7l.15,1.15,190.94,39.73,0,1.95-86.11,53.15.49,1,101.85,3.59.61,1.56L98.8,729.86l.65.93,186-61.2,1.16,1.36-47.9,88.45,1.11.68,89.07-48,1.54,1.39-62.5,186.25,1,.39,130-146.81,1.67.85,3.55,101.55,1.22.13,53.34-86.32,1.52.22,40,192,.94.1,39.81-192,1.63-.31L595.88,856l1.11-.28,2.48-101.68,1.7-.64L731.09,900.09l.83-.56L670.75,713.24l1.39-1.26,89.94,48.51.61-.9-48-88.08,1.43-1.75,183.82,60.81.63-1.26-145-129.52ZM500.59,721.08c-121.64,0-220.24-98.61-220.24-220.24S379,280.6,500.59,280.6,720.83,379.2,720.83,500.84,622.23,721.08,500.59,721.08Z" />
                </svg>
              </div>
            </div>
            <ul>
              <li>Sign Up</li>
              <li>Sign</li>
            </ul>
          </nav>
        </div>
        <div className="main-page-bottom">
          
          <div className="sign-icon-cont">
            {signs.map(sign => {
              return (
                <SignImage
                  selected={selected}
                  sign={sign}
                  selectSign={this.selectSign}
                />
              );
            })}
          </div>
          <HomePageReport
            selectedReport={
              selected ? reports.filter(r => r.sun_sign === selected)[0] : ""
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
