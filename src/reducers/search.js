import * as types from '../configs/actions';
const INITIAL_STATE = {
    showLoading: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SEARCH_ROUTE:
            if (action.payload.stopPointSequences) {
                return {...state, route: action.payload.stopPointSequences[0].stopPoint};
            } else {
                return {...state, route: []};
            }
        case types.SEARCH_POINT:
            if (action.payload.length > 0) {
                return {...state, point: action.payload};
            } else {
                return {...state, point: []};
            }
        case types.SHOW_LOADING:
            return {...state, showLoading: true};
        case types.HIDE_LOADING:
            return {...state, showLoading: false};
        default:
            return state;
    }
}