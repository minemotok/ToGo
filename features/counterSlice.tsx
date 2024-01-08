import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number,
}
const initialState: CounterState = {
  value: 0,
}

// createSlice actionCreater, dispach, reducerを一度に作成できる
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: { // actionCreaterはreducerを作成すると同じ名称で自動的に裏で作成される
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;