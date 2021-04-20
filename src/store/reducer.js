import * as actionTypes from './actions/actionTypes'

//initializing the global state
const initialState = {
    count: 0
}

//reducer is a function that gives us access to the state and returns the UPDPATED state
const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                count: state.count + action.payload
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state
    }
}

export default reducer