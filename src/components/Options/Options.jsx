//import css from "../Options/Options.module.css";

export default function Options({ onClick, children }) {
  return (
    <div>
      <button
        onClick={() => {
          onClick;
        }}
      >
        {children}
      </button>

      {/* <button onClick={}>Reset</button> */}
    </div>
  );
}
