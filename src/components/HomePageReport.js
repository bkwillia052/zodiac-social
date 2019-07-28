import React from "react";
import "./HomePageReport.css";
import { useSpring, animated, config } from "react-spring";
import AnimatedTopBorder from "./AnimatedTopBorder";
import { random } from "node-forge";

const HomePageReport = props => {
  const { selectedReport } = props;

  if (props.selectedReport) {
    var {
      personal_life,
      travel,
      health,
      emotions,
      luck,
      profession
    } = selectedReport.prediction;
  }

  let reportObject = {
    "Personal Life": personal_life,
    Travel: travel,
    Health: health,
    Emotions: emotions,
    Luck: luck,
    Profession: profession
  };

  let containerResizer = useSpring({
    height: selectedReport ? `70%` : `10%`,
    opacity: selectedReport ? 1 : 1
  });
  let borderResizer = useSpring({
    config: config.molasses,
    delay: 150 + Math.random() * 500,
    width: selectedReport ? `50%` : `0%`
  });

  let topicBorderResizer = useSpring({
    width: selectedReport ? `100%` : `0%`,
    config: config.molasses,
    delay: 190
  });

  let fontColorChange = useSpring({
    color: !selectedReport
      ? `rgba(255, 255, 255,1)`
      : `rgba(158, 158, 158, 0.795)`,
    delay: 600,
    config: config.slow
  });

  let topics = Object.keys(reportObject);
  return (
    <animated.div className={`report-container`} style={containerResizer}>
      <div
        className="report-container-bg"
        style={{ height: selectedReport ? `180%` : `100%` }}
      />
      {selectedReport ? (
        topics.map((topic, topicIdx) => {
          let topicIndex =
            topic === "Personal Life" ? "personal_life" : topic.toLowerCase();

          return (
            <div className="report-topic-container">
              <div className="report-topic">
                <div className="topic-corner top" />
                <div className="topic-corner left" />
                <animated.div
                  className="topic-corner bottom"
                  style={topicBorderResizer}
                />
                <div className="topic-corner right" />
                {topic}
              </div>

              <div className="report-content">
                <animated.div
                  className="content-corner"
                  style={borderResizer}
                />
                {reportObject[topic]}
              </div>
            </div>
          );
        })
      ) : (
        <animated.div className="select-txt" style={fontColorChange}>
          Select Your Sign To View Your Daily Report
        </animated.div>
      )}
    </animated.div>
  );
};

export default HomePageReport;
