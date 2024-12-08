import { useContext } from "react";
import ThemeContext from "./ThemeContext.tsx";
import { Button } from "../ui/button.tsx";
import { Moon, Sun } from "lucide-react";

const ToggleThemeButton: React.FC = () => {
    const { toggleDarkMode } = useContext(ThemeContext);
    return (
        <div className="fixed top-10 right-10 flex gap-2 default">
            <Button
                onClick={() => toggleDarkMode()}
                // className="cursor-pointer px-4 py-2 rounded bg-black/10 dark:bg-white/10 p-1 ring-1 ring-black/15 dark:ring-white/15 ring-inset"
            >
                <Moon className="size-4 text-black hidden dark:block" />
                <Sun className="size-4 text-black block dark:hidden" />
            </Button>
        </div>
    );
};

export default ToggleThemeButton;
