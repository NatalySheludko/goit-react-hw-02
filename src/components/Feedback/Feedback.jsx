import css from "../Feedback/Feedback.module.css";

export default function Feedback({ value, total, percentFeedback }) {
  return (
    <div className={css.feedback}>
      <p>Good:{value.good}</p>
      <p>Neutral:{value.neutral}</p>
      <p>Bad:{value.bad}</p>
      <p>Total:{total}</p>
      <p>Positive: {percentFeedback}%</p>
    </div>
  );
}
