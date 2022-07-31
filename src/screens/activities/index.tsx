import React from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useGetActivityQuery } from '../../services/persons';
import { Header } from '../../components';
import colors from '../../utils/colors';
import styles from './styles';
import { EmptyListText } from '../../components/text';
const Activities = ({ navigation, route }: NativeStackScreenProps<any>) => {
    const id = route?.params?.id
    const { data, isLoading } = useGetActivityQuery({ id })
    const _renderActivites = ({ item }) => {
        return (
            <View style={styles.activityContainer}>
                <Text style={styles.labelText}>Deal Title: <Text style={styles.valueText}>{item?.deal_title ?? 'Not Mentioned'}</Text></Text>
                <Text style={styles.labelText}>Subject: <Text style={styles.valueText}>{item?.subject ?? 'Not Mentioned'}</Text></Text>
                <Text style={styles.labelText}>Note: <Text style={styles.valueText}>{item?.note ?? 'Not Mentioned'}</Text></Text>
                <Text style={styles.labelText}>Public Description: <Text style={styles.valueText ?? 'Not Mentioned'}>{item?.public_description}</Text></Text>
            </View>
        )
    }
    return (
        <ScreenWrapper statusBarColor={colors.white}>
            <View style={styles.container}>
                <Header title='Activities' onPress={navigation.goBack} />
                <FlatList
                    data={data?.data ?? []}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={_renderActivites}
                    keyExtractor={(item: null | object, index: number) => String(index)}
                    ListFooterComponent={() => isLoading ? <ActivityIndicator size={'small'} color={colors.blue} /> : null}
                    ListEmptyComponent={() => !isLoading ? <EmptyListText title={`Currently you have't any activity`} /> : null}
                />
            </View>
        </ScreenWrapper>
    );
};
export default Activities;
