import { useState } from "react"
import { connect } from "react-redux"

function Counter(props) {

    //this is initalizing the local state
    const [value, setValue] = useState(0)
    //remeber: useState is a hook - it inializes your state. The first argument is a variable that holds your state, the second is a function that updates your state. The value you pass into useState is the value that your state begins/initalizes at

    const handleIncrement = () => {
        props.onIncrement()
    }

    const handleDecrement = () => {
        props.onDecrement()
    }

    const handleOnChange = (e) => {
        setValue(parseInt(e.target.value))
    }

    const handleAdd = () => {
        props.onAdd(value)
    }

    const handleSubtract = () => {
        props.onSubtract(value)
    }

    return (
        <div>
            <h1>Add/Subtract Counter</h1>
            <input type="text" onChange={handleOnChange}/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>

            <h1>Increment/Decrement By One Counter</h1>
            
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

//mapStateToProps is used for selecting data from the store that the connected component needs. It is called everytime the global state changes. It should return an object of the desired data (ie for displaying purposes)
const mapStateToProps = (state) => {
    return {
        counter: state.count
    }
}

//mapDistpatchToProps is used for dispatching actions to the store. Dispatch is a function of the Redux store. You call store.dispatch to dispatch an action - which is the only way to trigger a state change (ie for the purpose of updating the state)
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: "INCREMENT"}),
        onDecrement: () => dispatch({type: "DECREMENT"}),
        onAdd: (value) => dispatch({type: "ADD", payload: value}),
        //"payload" is the data we are interested in transporting
        onSubtract: (value) => dispatch({type: "SUBTRACT", payload: value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
//connect is what accesses the Redux store directly