import React from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useGetPersonsQuery } from '../../services/persons';
import { ScreenNames } from '../../routes';
import { width } from 'react-native-dimension';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../utils/colors';
import styles from './styles';
const Home = ({ navigation }: NativeStackScreenProps<any>) => {
    const { data, isLoading } = useGetPersonsQuery(undefined)
    const _renderPersons = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listContainer} activeOpacity={0.9}
                onPress={() => navigation.navigate(ScreenNames.PERSONDETAILS, { person: item })}
            >
                {item?.picture_id?.pictures ? <Image source={{ uri: item?.picture_id?.pictures?.[128] }} style={styles.avatar} /> :
                    <Feather name='user' size={width(10)} />}
                <View style={styles.nameContainer}>
                    <Text style={styles.titleText}>{item?.name}</Text>
                    <Octicons name='chevron-right' size={width(5)} />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ScreenWrapper statusBarColor={colors.white}>
            <View style={styles.container}>
                <FlatList
                    data={data?.data ?? []}
                    showsVerticalScrollIndicator={false}
                    renderItem={_renderPersons}
                    contentContainerStyle={styles.contentContainer}
                    keyExtractor={(item: null | object, index: number) => String(index)}
                    ListHeaderComponent={() => <Text style={styles.headerText}>person Lists</Text>}
                    ListFooterComponent={() => isLoading ? <ActivityIndicator size={'small'} color={colors.blue} /> : null}
                />
            </View>
        </ScreenWrapper>
    );
};
export default Home;
