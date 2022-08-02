import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Header, CircleButton } from '../../components';
import { useGetDealsQuery } from '../../services/persons';
import { selectPersons } from '../../store/slices/person';
import { useSelector } from 'react-redux';
import { EmptyListText, FooterListText } from '../../components/text';
import { useNetInfo } from "@react-native-community/netinfo";
import { LIMIT } from '../../utils/constants';
import colors from '../../utils/colors';
import styles from './styles';
type DealsScreenTypes = NativeStackScreenProps<{
    "DEALS": {
        id: number
        index: number
    }
}, "DEALS">
const Deals = ({ navigation, route }: DealsScreenTypes) => {
    const netInfo = useNetInfo();
    const [start, setStart] = useState(0)
    const { id, index } = route?.params
    const { data, isFetching } = useGetDealsQuery({ id, start }, { skip: !netInfo?.isConnected })
    const persons = useSelector(selectPersons)
    const _renderDeals = ({ item }) => {
        return (
            <View style={styles.dealListContainer}>
                <Text style={styles.labelText}>Title: <Text style={styles.valueText}>{item?.title ?? 'Not Mentioned'}</Text></Text>
                <Text style={styles.labelText}>Person Name: <Text style={styles.valueText}>{item?.person_name ?? 'Not Mentioned'}</Text></Text>
                <Text style={styles.labelText}>Owner Name: <Text style={styles.valueText}>{item?.owner_name ?? 'Not Mentioned'}</Text></Text>
                <Text style={styles.labelText}>Price: <Text style={styles.valueText}>{item?.formatted_value ?? 0}</Text></Text>
            </View>
        )
    }
    return (
        <ScreenWrapper statusBarColor={colors.white}>
            <View style={styles.container}>
                <Header title='Deals' onPress={navigation.goBack} />
                <FlatList
                    data={persons[index]?.deals ?? []}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={_renderDeals}
                    keyExtractor={(item: null | object, index: number) => String(index)}
                    ListEmptyComponent={() => !isFetching ? <EmptyListText title={`Currently you have't any deal`} /> : null}
                    ListFooterComponent={() => isFetching ? <ActivityIndicator size={'small'} color={colors.blue} /> :
                        (persons.length % LIMIT == 0 && data?.data?.length === LIMIT && persons.length) ? <CircleButton onPress={() => setStart(start + LIMIT)} /> :
                        persons[index]?.deals? <FooterListText title={netInfo?.isConnected?'No more activites':'No internet connection'} />:null
                    }
                />
            </View>
        </ScreenWrapper>
    );
};
export default Deals;
