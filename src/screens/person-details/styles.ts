import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import {width,height} from 'react-native-dimension';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollView:{
        paddingVertical:height(2),
        paddingHorizontal:width(5)
    },
    profileImage:{
        height:width(25),
        width:width(25),
        borderRadius:width(5)
    },
    labelText:{
        fontSize:width(4),
        color:colors.slateGray,
        marginTop:height(2)
    },
    infoText:{
        fontSize:width(4),
        fontWeight:'bold',
        color:colors.black,
        marginTop:height(1.5)
    },
    phoneContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    countdetailsContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:height(1.5)
    },
    countInfoContainer:{
        width:width(30),
        alignItems:'center',
        justifyContent:'center',
        marginTop:height(2)
    },
    countLabel:{
        fontSize:width(3.5),
        color:colors.slateGray,
    },
    countText:{
        fontSize:width(4),
        fontWeight:'bold',
        color:colors.black,
        marginTop:height(1)
    },
    buttonContainer:{
        flexDirection:'row',
      marginTop:height(5),
      alignItems:'center',
      justifyContent:'center'
    },
    button:{
        width:width(35),
        marginHorizontal:width(5)
    }
});

export default styles;