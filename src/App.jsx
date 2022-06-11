import logo from "./logo.svg";
import "./App.css";
import AngryButton from "./components/AngryButton";
import CounterButton from "./components/CounterButton";
import LightSwitchButton from "./components/CounterButton";
import TextRepeaterButton from "./components/TextRepeaterButton";
import { useState } from "react";
function App() {
  
  return (
    <div className="App">
      <h1>Fancy buttons!</h1>
      <section>
        <AngryButton/>
        <CounterButton/>
        <LightSwitchButton/>
        <TextRepeaterButton/>
      </section>
    </div>
  );
}

export default App;
