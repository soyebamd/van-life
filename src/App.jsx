import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Pawtrons from "./pawtrons/pawtrons";
import Terminaluxe from "./terminaluxe/terminaluxe";
import Form from "./form/form";
import NotFound from "./404/page-404";
import "./index.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pawtrons />

      <Terminaluxe />

      <Form />

      <NotFound />
    </>
  );
}

export default App;
