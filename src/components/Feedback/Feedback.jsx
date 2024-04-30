//import css from "../Feedback/Feedback.module.css";

export default function Feedback({ value }) {
  return (
    <div>
      <p>Good:{value.good}</p>
      <p>Neutral:{value.neutral}</p>
      <p>Bad:{value.bad}</p>
      <p>Total:{}</p>
      <p>Positive: %</p>
    </div>
  );
}
