import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
)(createStore)

export default createStoreWithMiddleware(rootReducer);