import { connect } from "react-redux"

function DisplayCounter(props) {
    return (
        <div>
            <h1>DisplayCounter</h1>
            <h2>{props.count}</h2>
        </div>
    )
}

//map Global State to Local Properties - so here we are receiving the data that we exported in our Counter component
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

//the connect function connects our component to a Redux store (aka our global state)
//it provides our connected component with the data it needs from the store, and the functions it can use to dispatch actions to the store
export default connect(mapStateToProps)(DisplayCounter)