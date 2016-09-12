import React from 'react';
import {Provider} from 'react-redux';
import Router from './configs/routes';
import store from './store/store';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyle from './styles/global';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

EStyleSheet.build(globalStyle);
export default App;