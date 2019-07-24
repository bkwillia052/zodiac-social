import React from "react";
import "./SignImage.css";

const SignImage = props => {
  return (
    <div className={`sign-icon ${props.sign}`}>
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
