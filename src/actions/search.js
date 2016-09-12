import * as types from '../configs/actions';
import API from '../services/api';

export function searchRouteNumber(busNumber) {
    return dispatch => {
        dispatch({
            type: types.SHOW_LOADING,
        });
        API.searchRouteNumber(busNumber).then(result => {
            console.log(result)
            dispatch({
                type: types.SEARCH_ROUTE,
                payload: result,
            })
            dispatch({
                type: types.HIDE_LOADING,
            });
        })
    }
}

export function searchStopPoint(stopPointId) {
    return dispatch => {
        dispatch({
            type: types.SHOW_LOADING,
        });
        API.searchStopPoint(stopPointId).then(result => {
            dispatch({
                type: types.SEARCH_POINT,
                payload: result,
            })
            dispatch({
                type: types.HIDE_LOADING,
            });
        })
    }
}