import { GET_LEARN } from '../actions/types';

const initalState = {
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_LEARN:
            return Object.assign(initalState, action.payload)
        default: 
            return state;
    }
}