import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Header } from '../../components';
import { CircleButton } from '../../components';
import { useGetPersonsQuery } from '../../services/persons';
import { ScreenNames } from '../../routes';
import { selectPersons } from '../../store/slices/person';
import { LIMIT } from '../../utils/constants';
import { FooterListText } from '../../components/text';
import { width } from 'react-native-dimension';
import { useSelector } from 'react-redux';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../utils/colors';
import styles from './styles';
const Home = ({ navigation }: NativeStackScreenProps<any>) => {
    const [start, setStart] = useState(0);
    const { data, isFetching } = useGetPersonsQuery({ start })
    const persons = useSelector(selectPersons)

    const _renderPersons = ({ item ,index}) => {
        const { name, picture_id: { pictures } } = item
        return (
            <TouchableOpacity style={styles.listContainer} activeOpacity={0.9}
                onPress={() => navigation.navigate(ScreenNames.PERSONDETAILS, { person: item ,index })}
            >
                {pictures ? <Image source={{ uri: pictures?.['128'] }} style={styles.avatar} /> :
                    <Feather name='user' size={width(10)} />}
                <View style={styles.nameContainer}>
                    <Text style={styles.titleText}>{name}</Text>
                    <Octicons name='chevron-right' size={width(5)} color={colors.black} />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <ScreenWrapper statusBarColor={colors.white}>
            <View style={styles.container}>
                <Header title='Persons List' isBack={false} />
                <FlatList
                    data={persons}
                    showsVerticalScrollIndicator={false}
                    renderItem={_renderPersons}
                    contentContainerStyle={styles.contentContainer}
                    keyExtractor={(_, index: number) => String(index)}
                    ListFooterComponent={() => isFetching ? <ActivityIndicator size={'small'} color={colors.blue} /> :
                        (persons.length % LIMIT === 0 && data?.data?.length===LIMIT) ? <CircleButton onPress={() => setStart(start + LIMIT)} /> :
                            <FooterListText title='No more Persons' />
                    }
                />
            </View>
        </ScreenWrapper>
    );
};
export default Home;
