import React from "react";
import "./HomePageReport.css";
import { useSpring, animated } from "react-spring";

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
    minHeight: selectedReport ? "85%" : "0px",
    opacity: selectedReport ? 1 : 0,
    width: selectedReport ? `50%` : "0px"
  });

  let topics = Object.keys(reportObject);
  return (
    <animated.div className={`report-container`} style={containerResizer}>
      <div className="report-container-bg" />
      {selectedReport
        ? topics.map(topic => {
            let topicIndex =
              topic === "Personal Life" ? "personal_life" : topic.toLowerCase();
            console.log(topicIndex, reportObject[topicIndex]);
            return (
              <div className="report-topic-container">
                <div className="report-topic">
                  <div className="topic-corner top" />
                  <div className="topic-corner left" />
                  <div className="topic-corner bottom" />
                  <div className="topic-corner right" />
                  {topic}
                </div>
                <div className="report-content">
                  <div className="content-corner" />
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
