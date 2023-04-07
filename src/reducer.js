import { 
    CHANGE_SEARCH_FIELD,
    SEARCH_ROBOTS_PENDING,
    SEARCH_ROBOTS_SUCCESS,
    SEARCH_ROBOTS_FAILURE
} from "./constant";


const initialSearchState = {
    searchField: " "
}

export const SearchRobots = ( state = initialSearchState, action = {} ) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }     
}

const initialRobotsState = {
    Robots: [],
    isPending: true
}

export const RequestRobots = ( state = initialRobotsState, action = {} ) => {
    switch(action.type) {
        case SEARCH_ROBOTS_PENDING:
            return Object.assign({}, state,  {isPending: true});
        case SEARCH_ROBOTS_SUCCESS:
            return Object.assign({}, state, {Robots: action.payload, isPending: false});
        case SEARCH_ROBOTS_FAILURE:
            return Object.assign({}, state, {error: action.payload})
        default:
            return state
    }
}