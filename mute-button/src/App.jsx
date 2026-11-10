import { useState } from "react";
import "./App.css";
import onIcon from "./assets/on.svg";
import offIcon from "./assets/off.svg";

function App() {
  const [isOn, setIsOn] = useState(true);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <main className="page">
      <h1>Mute Button</h1>

      <img
        className="mute-icon"
        src={isOn ? onIcon : offIcon}
        alt={isOn ? "Sound on" : "Sound off"}
        onClick={handleClick}
      />

      <p>Sound is {isOn ? "ON" : "OFF"}. Click the icon to toggle.</p>
    </main>
  );
}

export default App;
