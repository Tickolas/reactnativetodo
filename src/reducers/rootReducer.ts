import {SAVE_TODO} from "../actions/actions";

const initialState = {
    text: 'If you can see this we have redux.'
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TODO:
            return {...state, text: action.payload};
        default:
            return state;
    }
};

export default rootReducer;
