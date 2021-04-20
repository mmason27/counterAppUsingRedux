import { useState } from "react"
import { connect } from "react-redux"
import * as actionCreators from './store/creators/actionCreators'

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
            <h1 className="actionHeaders">Add or Subtract</h1>
            <div className="actionButtons">
                <input type="text" onChange={handleOnChange} placeholder="Enter a number"/>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleSubtract}>Subtract</button>
            </div>
            
            <h1 className="actionHeaders">Increment or Decrement By One</h1>
            <div className="actionButtons">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
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
        onIncrement: () => dispatch(actionCreators.incrementCounter()),
        onDecrement: () => dispatch(actionCreators.decrementCounter()),
        onAdd: (payload) => dispatch(actionCreators.addValue(payload)),
        //"payload" is the data we are interested in transporting
        onSubtract: (payload) => dispatch(actionCreators.subtractValue(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
//connect is what accesses the Redux store directly