import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import styles from './styles';

// Component Props
interface Props {
  title: string;
  textStyle?: TextStyle;
  textProps?: TextProps;
}
export const EmptyListText = ({ title = '', textStyle = {},  textProps = {},}: Props) => {
  return (
    <Text style={[styles.text, textStyle]} {...textProps}>{title}</Text>
  );
};