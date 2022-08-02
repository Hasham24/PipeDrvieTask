import React, { useState } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useGetActivityQuery } from '../../services/persons';
import { Header, CircleButton } from '../../components';
import { selectPersons } from '../../store/slices/person';
import { useSelector } from 'react-redux';
import { EmptyListText, FooterListText } from '../../components/text';
import { LIMIT } from '../../utils/constants';
import colors from '../../utils/colors';
import styles from './styles';

type ActivitiesScreenTypes = NativeStackScreenProps<{
    "ACTIVITIES": {
        id: number,
        index: number
    }
}, "ACTIVITIES">
const Activities = ({ navigation, route }: ActivitiesScreenTypes) => {
    const [start, setStart] = useState(0)
    const { id, index } = route?.params
    const { data, isFetching } = useGetActivityQuery({ id, start })
    const persons = useSelector(selectPersons)
    const _renderActivites = ({ item }) => {
        return (
            <View style={styles.activityContainer}>
                <Text style={styles.labelText}>Deal Title: <Text style={styles.valueText}>{item?.deal_title ?? 'N/A'}</Text></Text>
                <Text style={styles.labelText}>Subject: <Text style={styles.valueText}>{item?.subject ?? 'N/A'}</Text></Text>
                <Text style={styles.labelText}>Note: <Text style={styles.valueText}>{item?.note ?? 'N/A'}</Text></Text>
                <Text style={styles.labelText}>Public Description: <Text style={styles.valueText ?? 'N/A'}>{item?.public_description}</Text></Text>
            </View>
        )
    }
    return (
        <ScreenWrapper statusBarColor={colors.white}>
            <View style={styles.container}>
                <Header title='Activities' onPress={navigation.goBack} />
                <FlatList
                    data={persons[index]?.activities ?? []}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={_renderActivites}
                    keyExtractor={(_, index: number) => String(index)}
                    ListEmptyComponent={() => !isFetching ? <EmptyListText title={`Currently you have't any activity`} /> : null}
                    ListFooterComponent={() => isFetching ? <ActivityIndicator size={'small'} color={colors.blue} /> :
                        (persons.length % LIMIT == 0 && data?.data?.length === LIMIT && persons.length > 0) ? <CircleButton onPress={() => setStart(start + LIMIT)} /> :
                            <FooterListText title='No more activites' />
                    }
                />
            </View>
        </ScreenWrapper>
    );
};
export default Activities;
