import React from 'react';
import {View, Text, TextInput, ListView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as SearchAction from '../../actions/search';
import AppStyles from '../../styles/app';
import ListViewStopPoints from '../../components/listview/ListViewStopPoints';

class StopPointDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.search.searchStopPoint(this.props.stopPointId);
    }

    render() {
        return (
            <View style={AppStyles.screen}>
                <View style={AppStyles.wrapper}>
                    <View style={[AppStyles.container, AppStyles.containerBar]}>
                        <ListViewStopPoints
                            onItemPress={this.onItemPress.bind(this)}
                            showLoading={this.props.payload.showLoading}
                            dataSource={this.props.payload.point}
                        />
                    </View>
                </View>
            </View>
        )
    }

    onItemPress(id) {
        Actions.detail({id});
    }

    onSearchPress(value) {
        this.props.search.searchRouteNumber(value);
    }
}


function mapStateToProps(rootState) {
    return {
        payload: rootState.search,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        search: bindActionCreators(SearchAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopPointDetail);