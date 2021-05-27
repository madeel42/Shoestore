import { CART_ITEM, INCREMENT, DECREMENT, CLEARCART } from './Types'
import { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer'

const initialState = {
    Cart: [],
    counter: 1
}
export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const handleClick = (item) => {
        dispatch({
            type: CART_ITEM,
            payload: item
        })
    }
    const handleIncrement = (item) => {
        dispatch({
            type: INCREMENT,
            payload: item
        })
    }
    const handleDecrement = (item) => {
        dispatch({
            type: DECREMENT,
            payload: item
        })
    }
    const handleClear = (item) => {
        dispatch({
            type: CLEARCART,
            payload: item
        })
    }
    return <GlobalContext.Provider value={{ cartData: state.Cart, counter: state.counter, handleClick, handleIncrement, handleDecrement, handleClear }}>
        {children}
    </GlobalContext.Provider>
}