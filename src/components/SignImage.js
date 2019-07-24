import React from "react";
import "./SignImage.css";

const SignImage = props => {
  return (
    <div className="sign-icon">
      <div className="sign-img-container">
        <img src={require(`../assets/zodiac-signs/${props.sign}.png`)} alt="" />
      </div>
      <div className="sign-name">{props.sign.toUpperCase()}</div>
    </div>
  );
};

export default SignImage;
