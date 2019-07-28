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
    height: selectedReport ? `70%` : `0%`,
    opacity: selectedReport ? 1 : 0
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

  let topics = Object.keys(reportObject);
  return (
    <animated.div className={`report-container`} style={containerResizer}>
      <div className="report-container-bg" />
      {selectedReport
        ? topics.map((topic, topicIdx) => {
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
        : null}
    </animated.div>
  );
};

export default HomePageReport;
