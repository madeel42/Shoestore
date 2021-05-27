import { CART_ITEM, INCREMENT, DECREMENT, CLEARCART } from '../Context/Types'
export const AppReducer = (state, action) => {
    switch (action.type) {
        case CART_ITEM:
            let arr = [...state.Cart];
            let existingItem = arr.find(item => {
                return item.id === action.payload.id
            })
            if (existingItem) {
                existingItem.price += action.payload.price
            } else {
                arr.push(action.payload)
            }
            return {
                ...state,
                Cart: arr
            }
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
                Cart: state.Cart.map(item => item.id === action.payload.id ? {
                    ...item,
                    id: action.payload.id,
                    name: action.payload.name,
                    img: action.payload.img,
                    price: action.payload.price,
                    counter: action.payload.counter + 1,
                    description: action.payload.description,
                } : item)
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
                Cart: state.Cart.map(item => item.id === action.payload.id ? {
                    ...item,
                    id: action.payload.id,
                    name: action.payload.name,
                    img: action.payload.img,
                    price: action.payload.price,
                    counter: action.payload.counter > 0 ? action.payload.counter - 1 : 0,
                    description: action.payload.description,
                } : item)
            }
        case CLEARCART:
            return {
                ...state,
                Cart: action.payload
            }
        default:
            return state
    }
}