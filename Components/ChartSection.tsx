/* eslint-disable prettier/prettier */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ChartSection() {
  const contacts = [
    {
      uid: 1,
      name: 'Anand Singh',
      status: 'Making your paytm smooth',
      time: '11.45',
      message: '1',
      imageUrl:
        'https://media.gettyimages.com/id/962792090/photo/paytm-provided-personal-data-of-kashmiris-to-a-political-party.jpg?s=1024x1024&w=gi&k=20&c=LK80P5D7UiI5X87nHq58_09jKVNi7XHPd8H1qWUtqzk=',
    },
    {
      uid: 2,
      name: 'Arjun Singh',
      status: 'Making your gpay smooth',
      time: '12.35',
      message: '2',
      imageUrl:
        'https://media.gettyimages.com/id/1649574529/photo/key-speakers-at-global-fintech-festival.jpg?s=1024x1024&w=gi&k=20&c=wy2IJHh8s5J342wSgpC9chMRQc9fjGwmuZyI86829P4=',
    },
    {
      uid: 3,
      name: 'Suraj Singh',
      status: 'Making your phonepay smooth',
      time: '1.15',
      message: '3',
      imageUrl:
        'https://media.gettyimages.com/id/1255031793/photo/phonepe-raised-200-million-from-walmart.jpg?s=1024x1024&w=gi&k=20&c=X9C9JV41807zWuIYiW9J0xcgRM6xB0zVtaYZsPPX8I4=',
    },
    {
      uid: 4,
      name: 'Aryan Singh',
      status: 'Making your Bharatpay smooth',
      time: '2.00',
      message: '4',
      imageUrl:
        'https://media.gettyimages.com/id/1330395683/photo/young-female-customer-using-digital-payment-method-scanning-qr-code-with-smartphone-at-a.jpg?s=1024x1024&w=gi&k=20&c=bVLezs4t5vIEbEhgWmU_DThRmno1Xa8LnCZleKoo1hQ=',
    },
    {
      uid: 5,
      name: 'Raju Singh',
      status: 'Making your phonepay smooth',
      time: '4.05',
      message: '✔️',
      imageUrl:
        'https://media.gettyimages.com/id/1255031793/photo/phonepe-raised-200-million-from-walmart.jpg?s=1024x1024&w=gi&k=20&c=X9C9JV41807zWuIYiW9J0xcgRM6xB0zVtaYZsPPX8I4=',
    },
    {
      uid: 6,
      name: 'Raman Singh',
      status: 'Making your ponypay smooth',
      time: '3.25',
      message: '✔️',
      imageUrl:
        'https://media.gettyimages.com/id/962792090/photo/paytm-provided-personal-data-of-kashmiris-to-a-political-party.jpg?s=1024x1024&w=gi&k=20&c=LK80P5D7UiI5X87nHq58_09jKVNi7XHPd8H1qWUtqzk=',
    },
  ];

  return (
    <View>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({uid, name, status, time, message, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.statusUp}>{status}</Text>
            </View>
            <View style={styles.timeMessageContainer}>
              <Text style={styles.times}>{time}</Text>
              <Text style={styles.messages}>{message}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.usernameLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingBottom: 5,
    height: 400,
    backgroundColor: '#75DA8B',
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: '#7CEC9F',
    borderWidth: 5,
    borderColor: '#7CEC9F',
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    paddingLeft: 20,
  },
  statusUp: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
    paddingLeft: 20,
  },
  times: {
    fontSize: 10,
    fontWeight: '400',
    color: '#000000',
  },
  messages: {
    fontSize: 10,
    fontWeight: '900',
    color: '#4834DF',
    marginTop: 6,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#0A79DF',
    borderRadius: 60 / 2, // Add borderRadius
    padding: 1.5, // Add padding for better appearance
    backgroundColor: '#25CCF7',
  },
  userInfo: {
    flex: 1,
  },
  timeMessageContainer: {
    alignItems: 'center',
    paddingRight: 2,
  },
  usernameLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
});
