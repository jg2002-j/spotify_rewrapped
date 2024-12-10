import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    useEffect(() => {
        if (document.querySelector("html") != null) {
            if (isDarkMode) {
                document.querySelector("html").classList.add("dark");
                // console.log("dark mode");
            } else {
                document.querySelector("html").classList.remove("dark");
                // console.log("light mode");
            }
        } else {
            console.error("HTML is null.");
        }
    }, [isDarkMode]);

    return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
