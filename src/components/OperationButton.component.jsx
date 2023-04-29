import { ACTIONS } from "../App";

function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}

export default OperationButton;

// We create a OperationButton that holds both the dispatch and the operation
// we return a button that has a onClick(()) that returns a dispatch with a type ie.e ACTIONS.CHOOSE_OPERATION AND A PYLOAD WHICH HOLDS THE OPERATION {OPERATION}
// Inside the button is the operation {operation}
// we import ACTIONS
