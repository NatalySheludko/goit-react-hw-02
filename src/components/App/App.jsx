import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
//import css from "../App/App.module.css";
import { useState } from "react";

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  const updateGood = () => {
    setClicks({
      ...clicks,
      good: clicks.good + 1,
    });
  };
  const updateNeutral = () => {
    setClicks({
      ...clicks,
      neutral: clicks.neutral + 1,
    });
  };
  const updateBad = () => {
    setClicks({
      ...clicks,
      bad: clicks.bad + 1,
    });
  };

  return (
    <>
      <Description />
      <Options onUpdate={handleClick}></Options>
      <Options onClick={updateGood}>Good:</Options>
      <Options onClick={updateNeutral}>Neutral:</Options>
      <Options onClick={updateBad}>Bad:</Options>
      <Feedback value={clicks} />
    </>
  );
}
