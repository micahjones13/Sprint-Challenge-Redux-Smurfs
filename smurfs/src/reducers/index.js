import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_START, ADD_SUCCESS, ADD_FAIL } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

const rootReducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch(action.type){
    case FETCH_START:
      return{
        ...state,
        fetchingSmurfs: true,
        error: null,
      }
    case FETCH_SUCCESS: 
      return{
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      }
    case FETCH_FAIL:
      return{
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case ADD_START:
      return{
        ...state,
        addingSmurf: true,
        error: null
      }
    case ADD_SUCCESS: 
      return{
        ...state,
        addingSmurf: false,
        error: null, 
        smurfs: action.payload
      }
    case ADD_FAIL:
      return{
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    default:
      return state;


  }

}

export default rootReducer;