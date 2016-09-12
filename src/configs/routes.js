import React from 'react';
import {Router, Actions, Scene} from 'react-native-router-flux';
import Search from '../containers/Search/Search';
import StopPointDetail from '../containers/Search/StopPointDetail';

const scenes = Actions.create(
    <Scene key="root">
        <Scene key="search" component={Search} hideNavBar={true}/>
        <Scene key="detail"
               title="Detail"
               component={StopPointDetail} hideNavBar={false}/>
    </Scene>
)

export default () => (
    <Router scenes={scenes}></Router>
)
