import { useState } from "react";

function useTheme(defaultTheme = "light") {
    const [theme, setTheme] = useState(defaultTheme)

    return {
        theme,
        setTheme
    }
}

export default useTheme