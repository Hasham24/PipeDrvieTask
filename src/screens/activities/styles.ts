import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import { width, height } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    contentContainer: {
        paddingVertical: height(3)
    },
    activityContainer: {
        width: width(90),
        backgrounColor: colors.white,
        paddingBottom: height(1),
        borderRadius: width(2),
        borderWidth: 0.7,
        alignSelf: 'center',
        borderColor: colors.iron,
        paddingHorizontal: width(2.5),
        marginBottom:height(3),
    },
    labelText: {
        fontSize: width(3.5),
        color: colors.black,
        marginTop: height(1),
    },
    valueText: {
        fontSize: width(3.5),
        color: colors.black,
        fontWeight: 'bold'
    }
});

export default styles;