import { UiState } from './UiProvider';

type UiActionType = 
| {type:'[Ui] - toggle Menu'}
| {type:'[Ui] - toggle Theme'}
| {type:'[Ui] - toggle Order'}

export const UiReducer = (state:UiState,action:UiActionType):UiState => { 
    switch (action.type) {
        case '[Ui] - toggle Menu':
            return {
                ...state,
                toggleMenu: !state.toggleMenu
            };
        case '[Ui] - toggle Theme':
            return {
                ...state,
                isDark: !state.isDark
            };
        case '[Ui] - toggle Order':
            return {
                ...state,
                openOrder: !state.openOrder
            };

    
        default:
            return state;
    }
 }