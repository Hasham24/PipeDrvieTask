import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import {width,height} from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerText:{
        marginHorizontal:width(5),
        marginVertical:height(2),
        fontSize:width(4),
        fontWeight:'bold'
    },
    contentContainer:{
        paddingVertical:height(3)
    },
    listContainer:{
        width:width(90),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgrounColor:colors.white,
        paddingVertical:height(2),
        borderRadius:width(2),
        borderWidth:0.7,
        alignSelf:'center',
        borderColor:colors.iron,
        paddingHorizontal:width(2.5),
    },
    avatar:{
        width:width(12),  
        height:width(12),
        borderRadius:width(7.5),
    },
    nameContainer:{
        width:width(70),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    titleText:{
        fontSize:width(3.5),
        color:colors.slateGray
    }
});

export default styles;