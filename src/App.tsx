import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Heading
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </>
  );
}
