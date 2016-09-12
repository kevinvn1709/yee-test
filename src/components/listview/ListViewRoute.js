import React from 'react';
import {View, Text, ListView, ScrollView, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash';
import AppStyles from '../../styles/app';

var styles = EStyleSheet.create({
    scrollView: {
        flex: 1,
        marginBottom: 10,
    },
    rowItem: {
        padding: 5,
        borderWidth: 1,
        marginBottom: 2,
        borderColor: 'gray'
    },
    pointName: {
        fontSize: 13,
        fontWeight: '500'
    },
    towards: {
        fontSize: 12,
    }
})
export default class ListViewRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource = this.props.dataSource ? ds.cloneWithRows(this.props.dataSource) : [];
        return this.renderListView(dataSource);
    }

    renderListView(dataSource) {
        if (this.props.showLoading == true) {
            return (
                <View style={AppStyles.alignCenter}><Text>Searching...</Text></View>
            )
        } else {
            if (_.isEmpty(dataSource) || dataSource._cachedRowCount == 0) {
                return (
                    <View style={AppStyles.alignCenter}><Text>NO DATA FOUND.</Text></View>
                )
            } else {
                return (
                    <ListView
                        dataSource={dataSource}
                        enableEmptySections={true}
                        renderRow={this.renderItemRow.bind(this)}
                    />
                )
            }

        }
    }

    renderNoDataSource() {
        if (this.props.showLoading) {
            return (
                <View><Text>Searching...</Text></View>
            )
        } else {
            return (
                <View><Text>NO DATA FOUND.</Text></View>
            )
        }
    }

    renderItemRow(rowItem) {
        return (
            <TouchableOpacity
                onPress={this.props.onItemPress.bind(this, rowItem.id)}
            >
                <View style={styles.rowItem}>
                    <Text style={styles.pointName}>{rowItem.stopLetter} - {rowItem.name}</Text>
                    <Text style={styles.towards}>{rowItem.towards}</Text>
                    <Text style={styles.towards}>#{rowItem.id}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}