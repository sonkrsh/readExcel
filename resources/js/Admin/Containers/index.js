import React from 'react'
import {FormValueSubmit} from '../Actions/actions'
import { useSelector,useDispatch} from 'react-redux'

function index(props) {
    
    const value = useSelector(state=>state.reducer.noOfBooks)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>{value}</h2>
            <button onClick={()=>dispatch(FormValueSubmit(1))}>Click Me</button>
        </div>
    )
}


export default index;
