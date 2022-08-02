import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { ScreenNames } from '../../routes';
import { Button, Header } from '../../components';
import { width } from 'react-native-dimension';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../utils/colors';
import styles from './styles';
type PersonDetsilsScreenTypes = NativeStackScreenProps<{
    "PERSONDETAILS": {
        person: object
        index:number
    }
}, "PERSONDETAILS">
const PersonDetails = ({ navigation, route }: NativeStackScreenProps<any>) => {
   
    const { person,index } = route?.params ?? {}

    return (
        <ScreenWrapper statusBarColor={colors.white}>
            <View style={styles.container}>
                <Header title='Person Details' onPress={navigation.goBack} />
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollView}
                >
                    {person?.picture_id?.pictures ? <Image source={{ uri: person?.picture_id?.pictures?.['512'] }}
                        style={styles.profileImage} /> : <Feather name='user' size={width(15)} />}
                    <Text style={styles.labelText}>Title : <Text style={styles.infoText}>{person?.name}</Text></Text>
                    <Text style={styles.labelText}>Email : <Text style={styles.infoText}>{person?.primary_email ?? 'None'}</Text></Text>
                    <View style={styles.phoneContainer}>
                        <Text style={styles.labelText}>Phone Number : </Text>
                        <TouchableOpacity style={styles.phoneContainer}
                            onPress={() => Linking.openURL(`tel:${person?.phone[0]?.value}`)}
                        >
                            <Text style={styles.infoText}>{person?.phone[0]?.value != '' ? person?.phone[0]?.value : 'Not mentioned'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.countdetailsContainer}>
                        <View style={styles.countInfoContainer}>
                            <Text style={styles.countLabel}>Done Activeity</Text>
                            <Text style={styles.countText}>{person?.done_activities_count}</Text>
                        </View>
                        <View style={styles.countInfoContainer}>
                            <Text style={styles.countLabel}>Closed Deals</Text>
                            <Text style={styles.countText}>{person?.closed_deals_count}</Text>
                        </View>
                        <View style={styles.countInfoContainer}>
                            <Text style={styles.countLabel}>Followers</Text>
                            <Text style={styles.countText}>{person?.followers_count}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button children='Show Activities' containerStyle={styles.button}
                            onPress={() => navigation.navigate(ScreenNames.ACTIVITIES, { id: person?.id ,index})}
                        />
                        <Button children='Show Deals' containerStyle={styles.button}
                            onPress={() => navigation.navigate(ScreenNames.DEALS, { id: person?.id ,index})}
                        />
                    </View>
                </ScrollView>
            </View>
        </ScreenWrapper>
    );
};
export default PersonDetails;
