import {GET_VALUE } from '../Constants/constants'

 const initialState = {
    noOfBooks:100
  };

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_VALUE:
        return{
            ...state,
            noOfBooks:state.noOfBooks+action.data
        }
        default:
            return state
     
      }
  }
    


export default reducer;