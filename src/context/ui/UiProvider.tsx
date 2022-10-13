import { FC, useReducer } from 'react'
import { UiContext, UiReducer } from '..'

interface Props {
    children: React.ReactNode
}

export interface UiState {
    toggleMenu: boolean,
    isDark: boolean,
    openOrder: boolean,
}

export const Ui_INITIAL_STATE: UiState = {
    toggleMenu: false,
    isDark: false,
    openOrder: false,
}

export const UiProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(UiReducer, Ui_INITIAL_STATE)
    const toggleMenuOpen = () => {
        dispatch({ type: '[Ui] - toggle Menu' })
    }
    const toggleTheme = () => {
        dispatch({ type: '[Ui] - toggle Theme' })
    }
    const toggleOrder = () => {
        dispatch({ type: '[Ui] - toggle Order' })
    }
    return (
        <UiContext.Provider
            value={{
                ...state,
                toggleMenuOpen,
                toggleTheme,
                toggleOrder
            }}
        >
            {children}
        </UiContext.Provider>
    );
};
