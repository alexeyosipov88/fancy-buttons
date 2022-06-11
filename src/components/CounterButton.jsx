import { useState } from "react";
const CounterButton = () => {
  const [counter, setCounter] = useState();
  return (
    <div>
       <button className="CounterButton">
        You clicked me X amount of times
      </button>
    </div>

  )
}

export default CounterButton;