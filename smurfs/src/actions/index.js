/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('getData', res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_FAIL, payload: err.response })
    })
};

export const addSmurfAction = (smurf) => dispatch => {
  dispatch ({ type: ADD_START });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log('addSmurfAction', res);
      dispatch ({ type: ADD_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: ADD_FAIL, payload: err.response })
    })
}

export const deleteSmurfAction = (id) => dispatch => {
  dispatch ({ type: DELETE_START });
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log('delete', res);
      dispatch ({ type: DELETE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log('delete', err);
      dispatch({ type: DELETE_FAIL, payload: err.response })
    })
}