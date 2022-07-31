import React from 'react';
import { View, Text, TextProps, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { width } from 'react-native-dimension'
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

// Component Props
interface Props {
    onPress?: () => void;
    title: string;
    containerStyle?: ViewStyle;
    touchableOpacityProps?: TouchableOpacityProps;
    textStyle?: TextStyle;
    textProps?: TextProps;
}

const Header = ({
    onPress,
    title = '',
    containerStyle = {},
    textStyle = {},
    textProps = {},
    touchableOpacityProps,
}: Props) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TouchableOpacity onPress={onPress}{...touchableOpacityProps}>
                <AntDesign name='arrowleft' size={width(7)} />
            </TouchableOpacity>
            <Text style={[styles.text, textStyle]} {...textProps}>{title}</Text>
            <View style={styles.emptyContainer} />
        </View>
    );
};

export default Header;
