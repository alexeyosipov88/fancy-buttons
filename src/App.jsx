import logo from "./logo.svg";
import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/LightSwitchButton";
import TextRepeaterButton from "./components/TextRepeaterButton";
import { useState } from "react";
function App() {
  const [light, setLight] = useState(false);

  return (
    <div className="App">
      <h1>Fancy buttons!</h1>
      <section>
        <AngryButton/>
        <CounterButton/>
        <LightSwitchButton light={light} setLight={setLight}/>
        <TextRepeaterButton/>
      </section>
    </div>
  );
}

export default App;
