import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  resetValue,
} from "../state/features/counterSlice";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const newCount = useSelector((state: RootState) => state.counter.newValue);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <h2>{newCount}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Amount Increment
        </button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          Async Increment
        </button>
        <button onClick={() => dispatch(resetValue())}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
