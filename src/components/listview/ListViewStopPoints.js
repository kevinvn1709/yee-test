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
    },
    infoTime: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    towardsLeft: {
        flex: 1,
        alignItems: 'flex-start',
    },
    towardsRight: {
        flex: 1,
        alignItems: 'flex-end',
    }
})
export default class ListViewStopPoints extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: []
        }
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource = _.orderBy(this.props.dataSource, ['expectedArrival'], ['asc']);

        dataSource = dataSource ? ds.cloneWithRows(dataSource) : [];
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
        console.log()
        return (
            <View style={styles.rowItem}>
                <View style={styles.infoTime}>
                    <View style={styles.towardsLeft}>
                        <Text>{this.timeArrival(rowItem.expectedArrival)} mins</Text>
                    </View>
                    <View style={styles.towardsRight}>
                        <Text>#{rowItem.vehicleId}</Text>
                    </View>
                </View>
                <Text style={styles.pointName}>From: {rowItem.stationName}</Text>
                <Text style={styles.pointName}>To: {rowItem.destinationName}</Text>
                <Text style={styles.towards}>{rowItem.towards}</Text>
            </View>
        )
    }

    timeArrival(timeUTC) {
        var start = new Date(timeUTC);
        var current = new Date();
        var timeDiff = Math.abs(current.getTime() - start.getTime());
        return Math.ceil(timeDiff / (1000 * 60));
    }
}