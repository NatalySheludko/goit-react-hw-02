import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import css from "../App/App.module.css";
import { useState, useEffect } from "react";
import Notification from "../Notification/Notification";

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedFeedback = localStorage.getItem("saved-feedback-statistics");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const handleReset = () => {
    setClicks({
      ...clicks,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("saved-feedback-statistics", JSON.stringify(clicks));
  }, [clicks]);

  return (
    <div className={css.app}>
      <Description />

      <Options
        onUpdate={updateFeedback}
        onReset={handleReset}
        showResetBtn={totalFeedback > 0}
      />

      <div>
        {!totalFeedback ? (
          <Notification />
        ) : (
          <Feedback
            value={clicks}
            total={totalFeedback}
            percentFeedback={positiveFeedback}
          />
        )}
      </div>
    </div>
  );
}
