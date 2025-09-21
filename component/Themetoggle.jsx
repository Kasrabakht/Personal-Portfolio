import { useState,useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils.js";



    const THEME_KEY = "theme";

    function getInitialTheme() {
        // 1) use saved choice if present
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === "dark") return true;
        if (saved === "light") return false;
        // 2) otherwise fall back to system
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    export const ThemeToggle = () => {
        const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

        // keep DOM + storage in sync whenever state changes
        useEffect(() => {
            document.documentElement.classList.toggle("dark", isDarkMode);
            localStorage.setItem(THEME_KEY, isDarkMode ? "dark" : "light");
        }, [isDarkMode]);

        // optional: follow system changes if user hasn't chosen yet
        useEffect(() => {
            const mql = window.matchMedia("(prefers-color-scheme: dark)");
            const handler = e => {
                const saved = localStorage.getItem(THEME_KEY);
                if (!saved) setIsDarkMode(e.matches);
            };
            mql.addEventListener("change", handler);
            return () => mql.removeEventListener("change", handler);
        }, []);

        return (
            <button onClick={() => setIsDarkMode(v => !v)} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none") }>
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
        );
};