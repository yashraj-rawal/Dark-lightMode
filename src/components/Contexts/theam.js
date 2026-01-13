import { createContext, useContext } from "react";

export const ThemeConxtext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})


export const ThemeProvider = ThemeConxtext.Provider

export default function  useTheme() {
    return useContext(ThemeConxtext)
}