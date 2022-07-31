import React, {useMemo} from 'react';
import {
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import styles from './styles';

// Component Props
interface Props {
  onPress?: () => void;
  children: string;
  containerStyle?: ViewStyle;
  touchableOpacityProps?: TouchableOpacityProps;
  textStyle?: TextStyle;
  textProps?: TextProps;
}

const Button = ({
  onPress,
  children = 'Button',
  containerStyle = {},
  touchableOpacityProps,
  textStyle = {},
  textProps = {},
}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      {...touchableOpacityProps}>
      <Text style={[styles.text, textStyle]} {...textProps}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
