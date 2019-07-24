import React from "react";
import "./SignImage.css";

function rowPercent(sign) {
  switch (sign) {
    case "aries":
    case "taurus":
    case "gemini":
    case "cancer":
      return "0";
    case "leo":
    case "virgo":
    case "libra":
    case "scorpio":
      return "33%";

    case "sagittarius":
    case "capricorn":
    case "aquarius":
    case "pisces":
      return "66%";
    default:
      return null;
  }
}
function columnPercent(sign) {
  switch (sign) {
    case "aries":
    case "leo":
    case "sagittarius":
      return "5%";
    case "taurus":
    case "virgo":
    case "capricorn":
      return "30%";
    case "gemini":
    case "libra":
    case "aquarius":
      return "55%";
    case "cancer":
    case "scorpio":
    case "pisces":
      return "80%";
    default:
      return null;
  }
}

const SignImage = props => {
  return (
    <div
      className={`sign-icon ${props.sign} selected`}
      style={{ left: props.sign === props.selected ? "50%" : columnPercent(props.sign), top: left: props.sign === props.selected ? "50%" :rowPercent(props.sign) }}
    >
      <div className="sign-img-container">
        <div className={`inner ${props.selected ? "square" : "circle"}`} />
        <div className={`inner ${props.selected ? "circle" : "square"}`} />
        <img src={require(`../assets/zodiac-signs/${props.sign}.png`)} alt="" />
      </div>
      <div className="sign-name">{props.sign.toUpperCase()}</div>
    </div>
  );
};

export default SignImage;
