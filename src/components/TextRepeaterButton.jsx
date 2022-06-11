import { useState } from "react";
const TextRepeaterButton = () => {
  const [repeater, setRepeater] = useState(1);
  const spans = [];
  for(let i = 0; i < repeater; i++) {
    spans.push(<span key={i}>I like this text</span>);
  }
  return <div>
     <button onClick={() => {setRepeater(prev => prev + 1)}} className="TextRepeaterButton">
        {spans}
      </button>
  </div>;
};

export default TextRepeaterButton;
