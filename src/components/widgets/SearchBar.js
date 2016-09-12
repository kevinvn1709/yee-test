import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppStyles from '../../styles/app';

var styles = EStyleSheet.create({
    searchBar: {
        flex: 1,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listStopPoint: {
        flex: 5
    }
})
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchText: ''};
    }

    render() {
        return (
            <View style={styles.searchBar}>
                <View style={styles.searchInput}>
                    <TextInput
                        ref="search"
                        placeholder={"Enter bus number..."}
                        onChangeText={(searchText) => this.setState({searchText})}
                        style={AppStyles.textInput}
                        editable={true}
                    />
                </View>
                <View style={styles.searchButton}>
                    <TouchableOpacity
                        onPress={this.onPress.bind(this)}
                    >
                        <Text>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    onPress() {
        this.props.onSearchPress(this.state.searchText);
    }
}