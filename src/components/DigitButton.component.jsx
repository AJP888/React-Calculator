import { ACTIONS } from "../App";

function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}

export default DigitButton;

// The DigitalButton has a dispatch and a digit
// the button the uses onClick(()) the dpsitach has a type: ACTIONS.ADD_DIGIT, the payload which is the {digit}
// inside the button is a {digit}
