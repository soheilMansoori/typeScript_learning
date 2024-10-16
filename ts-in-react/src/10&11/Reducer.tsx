import { useReducer } from "react";

type UpdateActionType = {
  type: "plus" | "minus";
  payload: number;
};

type ResetActionType = {
  type: "reset";
};

type actionTypes = ResetActionType | UpdateActionType;

const initialState: number = 0;

const reducer = (state: number, action: actionTypes) => {
  switch (action.type) {
    case "plus": {
      return state + action.payload;
    }
    case "minus": {
      return state - action.payload;
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      count is {state}
      <button onClick={() => dispatch({ type: "plus", payload: 1 })}>
        plus
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "minus", payload: 1 })}>
        minus
      </button>
    </>
  );
}
