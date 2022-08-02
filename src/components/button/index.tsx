import React from 'react';
import { Text, TextProps, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { width } from 'react-native-dimension';
import styles from './styles';
import colors from '../../utils/colors';

// Component Props
interface ButtonProps {
  onPress?: () => void;
  children: string;
  containerStyle?: ViewStyle;
  touchableOpacityProps?: TouchableOpacityProps;
  textStyle?: TextStyle;
  textProps?: TextProps;
}
export const Button = ({
  onPress,
  children = 'Button',
  containerStyle = {},
  touchableOpacityProps,
  textStyle = {},
  textProps = {},
}: ButtonProps) => {
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
// Circle Button
interface CircleButtonProps {
  onPress?: () => void;
  containerStyle?: ViewStyle;
  touchableOpacityProps?: TouchableOpacityProps;
}
export const CircleButton = ({
  onPress,
  touchableOpacityProps,
  containerStyle
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.circleButton, containerStyle]}
      onPress={onPress}
      {...touchableOpacityProps}>
      <AntDesign name='pluscircle' size={width(8)} color={colors.blue} />
    </TouchableOpacity>
  )
}

