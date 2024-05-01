import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
//import css from "../App/App.module.css";
import { useState } from "react";
import Notification from "../Nitification/Notification";

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  // const handleReset = () => {
  //   setClicks({
  //     ...clicks,
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });
  // };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  console.log(totalFeedback);

  return (
    <div>
      <Description />

      <Options onUpdate={updateFeedback} />
      {/* <Options onReset={handleReset}/> */}

      <div>
        {!totalFeedback ? <Notification /> : <Feedback value={clicks} />}
      </div>
    </div>
  );
}
