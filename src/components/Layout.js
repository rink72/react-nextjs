import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";

function Layout({ defaultTheme, children }) {
    return (
        <ThemeProvider defaultTheme={defaultTheme}>
            <LayoutNoProvider>
                {children}
            </LayoutNoProvider>
        </ThemeProvider>
    )
}

function LayoutNoProvider({ children }) {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme === "light" ? "containter-fluid light" : "container-fluid dark"}>
            {children}
        </div>
    )
}

export default Layout