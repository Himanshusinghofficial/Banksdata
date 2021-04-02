import {
  GET_LOGS,
  SEARCH_LOGS,
  LOGS_ERROR,
  SET_LOADING
} from './types';

export const getLogs = (text) => async dispatch => {
 
  try {
    setLoading();
    const res = await fetch(`https://vast-shore-74260.herokuapp.com/banks?city=${(text).toUpperCase()}`)
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err
    });
  }
};


export const searchLogs = text => async dispatch =>{
  dispatch({ type: SEARCH_LOGS, payload: text });
};


export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

