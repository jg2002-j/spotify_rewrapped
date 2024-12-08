import "./styles.css";
import MainMenu from "./pages/MainMenu";
import ThemeProvider from "./components/ModeToggle/ThemeProvider";
import ToggleThemeButton from "./components/ModeToggle/ToggleThemeButton";

function App() {
    return (
        <ThemeProvider>
            <ToggleThemeButton />
            <MainMenu />
        </ThemeProvider>
    );
}

export default App;
