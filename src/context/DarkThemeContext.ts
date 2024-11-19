import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface DarkThemeContextType {
    isDark: boolean,
    setIsDark: Dispatch<SetStateAction<boolean>>
}

export const DarkThemeContext = createContext<DarkThemeContextType | undefined> (undefined)

export const useDarkTheme = () => {
    const context = useContext(DarkThemeContext)
    if (!context) throw new Error('DarkThemeContext deve ser usado dentro de um DarkThemeContextProvider');
    return context
}