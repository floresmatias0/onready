import axios from 'axios';

//constants
let initialState = {
    animes: [],
    loadingAnimes: true,
    errorAnimes: "",
    genres: [],
    loadingGenres: true,
    errorGenres: "",
    search:[],
    loadingSearch:true,
    errorSearch:""
}

let GET_ANIMES_REQUEST = "GET_ANIMES_REQUEST";
let GET_ANIMES_SUCCESS = "GET_ANIMES_SUCCESS";
let GET_ANIMES_FAILURE = "GET_ANIMES_FAILURE";

let GET_GENRES_REQUEST = "GET_GENRES_REQUEST";
let GET_GENRES_SUCCESS = "GET_GENRES_SUCCESS";
let GET_GENRES_FAILURE = "GET_GENRES_FAILURE";

let SEARCH_REQUEST = "SEARCH_REQUEST";
let SEARCH_SUCCESS = "SEARCH_SUCCESS";
let SEARCH_FAILURE = "SEARCH_FAILURE";

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
      case GET_GENRES_REQUEST:
        return {
          ...state,
          loadingGenres:false
        }
      case GET_GENRES_SUCCESS:
        return {
          ...state,
          genres: action.payload,
          loadingGenres: true
        }
      case GET_GENRES_FAILURE:
        return {
          ...state,
          errorGenres: action.payload,
          loadingGenres:true
        }
      case SEARCH_REQUEST:
        return {
          ...state,
          loadingSearch:false
        }
      case SEARCH_SUCCESS:
        return {
          ...state,
          search: action.payload,
          loadingSearch: true
        }
      case SEARCH_FAILURE:
        return {
          ...state,
          errorSearch: action.payload,
          loadingSearch:true
        }
   
    default:
      return state;
  }
}

//actionsCreator
export const getAnimes = (num) => {
    return async (dispatch,getState) => {
      dispatch({
        type:GET_ANIMES_REQUEST
      })

      let options = {
        method: 'POST',
        url: 'http://localhost:3001/animes/create',
        header:{
            ContentType: 'application/json',   
        },
        data:{
            offset: num
            }
    }
      await axios.request(options)
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

export const getGenres = () => {
  return async (dispatch,getState) => {
    dispatch({
      type:GET_GENRES_REQUEST
    })

    await axios.get('http://localhost:3001/animes/genres')
    .then(res => {
        console.log(res.data)
      dispatch({
        type: GET_GENRES_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_GENRES_FAILURE,
        payload: err.message
      })
    })
  }
}

export const getAnimeByName = (name) => {
  return async (dispatch,getState) => {
    dispatch({
      type: SEARCH_REQUEST
    })

    await axios.get(`http://localhost:3001/animes/search/${name}`)
    .then(res => {
        console.log(res.data)
      dispatch({
        type: SEARCH_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: SEARCH_FAILURE,
        payload: err.message
      })
    })
  }

}



export default reducer;