import { actions } from '../actions/index.js';

const reducer = (state, action) => {
    switch (action.type) {
        case actions.cambiarAutor:
            return {
                ...state,
                autor: action.payload
            }
        default:
            return state;
    }
};

export default reducer;