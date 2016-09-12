import {Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F7F7F7'
    },
    wrapper: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        width: '$widthContainer',
    },
    containerFull: {
        width: '$widthContainerFull',
        justifyContent: 'center',
    },
    containerBar: {
        marginTop: Platform.OS == 'android' ? 56 : 64,
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flex_1: {
        flex: 1,
    },
    flex_2: {
        flex: 2,
    },
    flex_3: {
        flex: 3,
    },
    flex_4: {
        flex: 4,
    },
    flex_5: {
        flex: 5,
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textVerticalCenter: {
        textAlignVertical: 'center'
    },
    textInput: {
        borderWidth: 1,
        height: 36,
        borderColor: 'gray',
        paddingLeft: 10,
    }
});