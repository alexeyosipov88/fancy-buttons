import { useState } from "react";
const LightSwitchButton = ({light, setLight}) => {
  const handleClick = () => {
    const val = light ? false : true;
    setLight(val);

  }
  return (
    <div>
      <button onClick={handleClick} className="LightSwitchButton">
      {light &&<span className="on"><i>💡</i> I'm on!</span>}
      {!light && <span className="off"><i>💡</i> I'm off!</span>}
      </button>
    </div>

  )

}

export default LightSwitchButton;