import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../../shared/themes'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.transparent
    },
    GridViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: Colors.jhipsterBlue
    },
    GridViewTextLayout: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff',
        padding: 10,
    },
    logo: {
        alignSelf: 'center',
        height: 128,
        width: 128,
        margin: 50
    },
})