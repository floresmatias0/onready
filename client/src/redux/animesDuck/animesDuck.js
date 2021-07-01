import axios from 'axios';

//constants
let initialState = {
    animes: [],
    loadingAnimes: true,
    errorAnimes: "",
}
let URL = "http://localhost:3001/animes"
let GET_ANIMES_REQUEST = "GET_ANIMES_REQUEST ";
let GET_ANIMES_SUCCESS = "GET_ANIMES_SUCCESS";
let GET_ANIMES_FAILURE = "GET_ANIMES_FAILURE";

//reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ANIMES_REQUEST:
      return {
        ...state,
        loadingAnimes:false
      }
    case GET_ANIMES_SUCCESS:
      return {
        ...state,
        animes: action.payload,
        loadingAnimes: true
      }
    case GET_ANIMES_FAILURE:
      return {
        ...state,
        errorAnimes: action.payload,
        loadingAnimes:true
      }
   
    default:
      return state;
  }
}
//actionsCreator
export const getAnimes = () => {
    return async (dispatch,getState) => {
      dispatch({
        type:GET_ANIMES_REQUEST
      })
      await axios.get(URL)
      .then(res => {
          console.log(res.data)
        dispatch({
          type: GET_ANIMES_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: GET_ANIMES_FAILURE,
          payload: err.message
        })
      })
    }
}



export default reducer;