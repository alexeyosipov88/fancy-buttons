import { useState } from "react";
const CounterButton = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
       <button onClick={() => setCounter(counter + 1)} className="CounterButton">
        You clicked me {counter} amount of times
      </button>
    </div>

  )
}

export default CounterButton;