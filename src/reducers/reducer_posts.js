import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
    case FETCH_POSTS:
        return { ...state, all: action.payload.data } // create new object, take current state, assign all: action.payload.data, return new state
    default:
        return state;
    }
}
