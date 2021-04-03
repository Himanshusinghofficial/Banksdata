import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    SEARCH_LOGS,
  } from '../actions/types';
  
  const initialState = {
    logs: [],
    loading: false,
    filtered: [],
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_LOGS:
        return {
          ...state,
          logs: action.payload,
          loading: false
        };
      case SEARCH_LOGS:
        return {
          ...state,
          filtered: state.logs.filter(log => {
              return  action.payload===""? null: log.bank_name.toUpperCase().indexOf((action.payload))>-1 || log.state.toLowerCase().indexOf(action.payload)>-1 || log.address.toLowerCase().indexOf(action.payload)>-1 || log.ifsc.toLowerCase().indexOf(action.payload)>-1 || log.district.toLowerCase().indexOf(action.payload)>-1 || log.city.toLowerCase().indexOf(action.payload)>-1 || log.branch.toLowerCase().indexOf(action.payload)>-1
         })
        };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
      case LOGS_ERROR:
        console.error(action.payload);
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };