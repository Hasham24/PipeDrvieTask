import { StyleSheet } from 'react-native';
import { width, height } from 'react-native-dimension';
import colors from '../../utils/colors';
const styles = StyleSheet.create({
  text: {
    color: colors.slateGray,
    fontSize: width(3.5),
    fontWeight: 'bold',
    marginTop: height(35),
    textAlign: 'center'
  },
});

export default styles;
