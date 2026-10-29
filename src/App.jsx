import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Pawtrons from "./pawtrons/pawtrons";
import Terminaluxe from "./terminaluxe/terminaluxe";
import "./index.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pawtrons />

      <Terminaluxe />
    </>
  );
}

export default App;
