import React from "react";
import "./HomePageReport.css";

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

  let topics = Object.keys(reportObject);
  return (
    <div className="report-container">
      {selectedReport
        ? topics.map(topic => {
            let topicIndex =
              topic === "Personal Life" ? "personal_life" : topic.toLowerCase();
            console.log(topicIndex, reportObject[topicIndex]);
            return (
              <div className="report-topic">{`${topic}: ${
                reportObject[topic]
              }`}</div>
            );
          })
        : null}
    </div>
  );
};

export default HomePageReport;
