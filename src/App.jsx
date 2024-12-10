import "./styles.css";
import MainMenu from "./pages/MainMenu";
import ThemeProvider from "./components/ModeToggle/ThemeProvider";
import ToggleThemeButton from "./components/ModeToggle/ToggleThemeButton";
import DataViewer from "./pages/DataViewer";

function App() {
    return (
        <ThemeProvider>
            <ToggleThemeButton />
            <div className="flex gap-10 items-center justify-center">
                <DataViewer />
                <MainMenu />
            </div>
        </ThemeProvider>
    );
}

export default App;
