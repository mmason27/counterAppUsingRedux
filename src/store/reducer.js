//initializing the global state
const initialState = {
    count: 0
}

//reducer is a function that gives us access to the state and returns the UPDPATED state
const reducer = (state = initialState, action) => {
    if (action.type == "INCREMENT") {
        return {
            ...state,
            count: state.count + 1
        }
    } else if (action.type == "DECREMENT") {
        return {
            ...state,
            count: state.count - 1
        }
    } else if (action.type == "ADD") {
        return {
            ...state,
            count: state.count + action.payload
        }
    } else if (action.type == "SUBTRACT") {
        return {
            ...state,
            count: state.count - action.payload
        }
    }
    
    return state
    //here we're returning the updated state
}

export default reducer