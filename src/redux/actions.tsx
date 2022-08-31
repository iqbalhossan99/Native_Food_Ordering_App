import { DECREMENT, INCREMENT, RESET, INPUTINCREMENT } from "./constant"

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

export const resetCounter = () => {
    return {
        type: RESET
    }
}

export const inputIncrement = (value: number) => {
    return {
        type: INPUTINCREMENT,
        payload: value
    }
}
