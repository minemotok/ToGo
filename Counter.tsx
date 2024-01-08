import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/counterSlice";
import { RootState } from "./stores/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispach = useDispatch();

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => dispach(increment())}>+</button>
      <button onClick={() => dispach(decrement())}>-</button>
    </div>
  )
}

export default Counter;