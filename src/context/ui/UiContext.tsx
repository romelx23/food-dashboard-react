import { createContext } from 'react';

interface ContextProps {
    toggleMenu: boolean;
    toggleMenuOpen: () => void;
    isDark: boolean;
    toggleTheme: () => void;
    openOrder: boolean;
    toggleOrder: () => void;
}

export const UiContext = createContext({} as ContextProps)