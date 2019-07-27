import React from "react";
import "./SignImage.css";
import { useSpring, animated } from "react-spring";

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
    /* width: 71%;
    height: 92%; */
const SignImage = props => {
  let resizer = useSpring({
    width: props.sign === props.selected ? `71%` : `19.54%`,
    height: props.sign === props.selected ? "440px" : "120px",
    left: props.sign === props.selected ? "25%" : columnPercent(props.sign),
    top: props.sign === props.selected ? "0" : rowPercent(props.sign)
  });
  return (
    <animated.div
      style={resizer}
      onClick={() => props.selectSign(props.sign)}
      className={`sign-icon ${props.sign} ${
        props.selected !== "" && props.selected !== props.sign ? "hidden" : ""
      }`}
    >
      <div className="sign-img-container">
        <div className="sign-img-container-bg" />
        <div className={`inner square `} />
        <div className={`inner circle `} />
        <img src={require(`../assets/zodiac-signs/${props.sign}.png`)} alt="" />
      </div>
      <div className="sign-name">{props.sign.toUpperCase()}</div>
    </animated.div>
  );
};

export default SignImage;
