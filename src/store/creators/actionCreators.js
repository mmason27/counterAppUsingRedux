import * as actionTypes from '../actions/actionTypes'

export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addValue = (payload) => {
    return {
        type: actionTypes.ADD,
        payload: payload
    }
}

export const subtractValue = (payload) => {
    return {
        type: actionTypes.SUBTRACT,
        payload: payload
    }
}