import { useDispatch, useSelector } from "react-redux";
import { handleDecrement, handleIncrement } from "../../shared/store/counter";
import { RootState } from "../../shared/store/store";
const Sample = () => {
  const counter = useSelector((state: RootState) => state.counter.increment);
  const dispatch = useDispatch();

  const max = 10;
  const min = 0;

  const handleDecrementButton = () => {
    if (counter > min) dispatch(handleDecrement(counter - 1));
  };

  const handleIncrements = () => {
    if (counter < max) dispatch(handleIncrement());
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleIncrements}>Increment</button>
      <button onClick={handleDecrementButton}>Decrement</button>
    </div>
  );
};

export default Sample;
