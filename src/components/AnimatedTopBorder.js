import React from "react";
import "./HomePageReport.css";
import { useSpring, animated, config } from "react-spring";

const AnimatedTopBorder = ({ selectedReport, topicIdx }) => {
  let borderResizer = useSpring({
    config: config.molasses,
    delay: 150,
    width: selectedReport ? `50%` : `0%`
  });

  console.log(borderResizer, selectedReport, topicIdx);
  return <animated.div className="content-corner" style={borderResizer} />;
};

export default AnimatedTopBorder;
