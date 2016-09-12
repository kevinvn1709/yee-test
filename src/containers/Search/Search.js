import React from 'react';
import {View, Text, TextInput, ListView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as SearchAction from '../../actions/search';
import AppStyles from '../../styles/app';
import SearchBar from '../../components/widgets/SearchBar';
import ListViewRoute from '../../components/listview/ListViewRoute';

var styles = EStyleSheet.create({
    searchBar: {
        flex: 1,
        flexDirection: 'row'
    },
    listStopPoint: {
        flex: 5
    }
})
class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={AppStyles.screen}>
                <View style={AppStyles.wrapper}>
                    <View style={AppStyles.container}>
                        <View style={styles.searchBar}>
                            <SearchBar
                                onSearchPress={this.onSearchPress.bind(this)}
                            />
                        </View>
                        <View style={styles.listStopPoint}>
                            <ListViewRoute
                                onItemPress={this.onItemPress.bind(this)}
                                showLoading={this.props.payload.showLoading}
                                dataSource={this.props.payload.route}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    onItemPress(stopPointId) {
        Actions.detail({stopPointId: stopPointId});
    }

    onSearchPress(routeId) {
        this.props.search.searchRouteNumber(routeId);
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);