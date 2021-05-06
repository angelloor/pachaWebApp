import { actions } from '../actions/index.js';

const reducer = (state, action) => {
    switch (action.type) {
        case actions.cambiarUserLogin:
            return {
                ...state,
                userLogin: action.payload
            }
        case actions.cambiarUsers:
            return {
                ...state,
                users: action.payload
            }
        case actions.cambiarNews:
            return {
                ...state,
                news: action.payload
            }
        case actions.cambiarStoreItem:
            return {
                ...state,
                storeItem: action.payload
            }
        default:
            return state;
    }
};

export default reducer;