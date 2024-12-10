import { useContext } from "react";
import ThemeContext from "./ThemeContext.tsx";
import { Button } from "../ui/button.tsx";
import { Moon, Sun } from "lucide-react";

const ToggleThemeButton = () => {
    const { toggleDarkMode } = useContext(ThemeContext);
    return (
        <div className="fixed top-10 right-10 flex gap-2 default">
            <Button onClick={() => toggleDarkMode()}>
                <Moon className="size-4 text-black hidden dark:block" />
                <Sun className="size-4 text-black block dark:hidden" />
            </Button>
        </div>
    );
};

export default ToggleThemeButton;
