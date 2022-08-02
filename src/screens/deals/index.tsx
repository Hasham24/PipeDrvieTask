import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { Header } from '../../components';
import { useGetDealsQuery } from '../../services/persons';
import { EmptyListText } from '../../components/text';
import colors from '../../utils/colors';
import styles from './styles';
type DealsScreenTypes = NativeStackScreenProps<{
    "DEALS": {
        id: number
    }
}, "DEALS">
const Deals = ({ navigation, route }: DealsScreenTypes) => {
    const { id } = route?.params
    const { data, isLoading } = useGetDealsQuery({ id })
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
                    data={data?.data ?? []}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={_renderDeals}
                    keyExtractor={(item: null | object, index: number) => String(index)}
                    ListFooterComponent={() => isLoading ? <ActivityIndicator size={'small'} color={colors.blue} /> : null}
                    ListEmptyComponent={() => !isLoading ? <EmptyListText title={`Currently you have't any deal`} /> : null}
                />
            </View>
        </ScreenWrapper>
    );
};
export default Deals;
