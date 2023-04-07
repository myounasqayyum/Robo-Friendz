import { 
    CHANGE_SEARCH_FIELD,
    SEARCH_ROBOTS_PENDING,
    SEARCH_ROBOTS_SUCCESS,
    SEARCH_ROBOTS_FAILURE
} from "./constant"

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch( {type: SEARCH_ROBOTS_PENDING} )
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json() )
        .then( data => dispatch({ type: SEARCH_ROBOTS_SUCCESS, payload: data} ))
        .catch( error => dispatch({ type: SEARCH_ROBOTS_FAILURE, payload: error}))
}