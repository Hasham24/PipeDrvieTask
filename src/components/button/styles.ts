import {StyleSheet} from 'react-native';
import {width,height} from 'react-native-dimension';
import colors from '../../utils/colors';
const styles = StyleSheet.create({
  container: {
    width:width(80) ,
    borderRadius: width(2),
    height:height(6),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor:colors.blue
  },
  text: {
    color: colors.white,
    fontSize: width(3.5),
    fontWeight:'bold'
  },
});

export default styles;
