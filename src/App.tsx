import "./styles.css";
import MainMenu from "./pages/MainMenu";
import ModeToggle from "./components/mode-toggle";
import { useState } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <MainMenu darkMode={darkMode} />
        </>
    );
}

export default App;
