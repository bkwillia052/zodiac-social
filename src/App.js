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
        <header className="App-header">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="590px"
            height="576px"
            viewBox="0 0 1200 1000"
            enable-background="new 0 0 1200 1000"
            xml:space="preserve"
          >
            <g>
              <g>
                <image
                  overflow="visible"
                  opacity="0.21"
                  width="590"
                  height="576"
                  xlink:href="9B4314F0.png"
                  transform="matrix(0.24 0 0 0.24 89.8936 90.3403)"
                />
                <g>
                  <path
                    d="M132.508,159.068h-24.663c-29.726-24.517-14.352-82.237,25.788-62.112c12.534,6.283,20.907,20.009,26.446,36.624
				c5.539-16.615,13.911-30.341,26.446-36.624c40.139-20.125,55.512,37.595,25.787,62.112H187.65c0,0,7.306-13.32,8.165-15.207
				c1.309-2.88,9.024-23.732-1.891-16.39c-14.772,9.932-18.143,45.382-19.756,60.982c-1.62,15.7-2.564,36.435-2.564,36.435h-1.418
				h-20.215h-1.42c0,0-0.941-20.735-2.563-36.435c-1.611-15.6-4.984-51.05-19.753-60.982c-10.918-7.342-3.201,13.509-1.893,16.39
				C125.201,145.749,132.508,159.068,132.508,159.068z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </header>
      </div>
    );
  }
}

export default App;
