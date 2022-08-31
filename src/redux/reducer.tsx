import { ActionSheetIOS } from "react-native"
import { DECREMENT, INCREMENT, INPUTINCREMENT, RESET } from "./constant"

const initialState = { count: 0 }

const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INPUTINCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state
    }
}


export default counterReducer