/* eslint-disable prettier/prettier */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';

export default function StatusOne() {
  const contacts = [
    {
      uid: 1,
      name: 'Anand Singh',
      imageUrl:
        'https://media.gettyimages.com/id/962792090/photo/paytm-provided-personal-data-of-kashmiris-to-a-political-party.jpg?s=1024x1024&w=gi&k=20&c=LK80P5D7UiI5X87nHq58_09jKVNi7XHPd8H1qWUtqzk=',
    },
    {
      uid: 2,
      name: 'Arjun Singh',
      imageUrl:
        'https://media.gettyimages.com/id/1649574529/photo/key-speakers-at-global-fintech-festival.jpg?s=1024x1024&w=gi&k=20&c=wy2IJHh8s5J342wSgpC9chMRQc9fjGwmuZyI86829P4=',
    },
    {
      uid: 3,
      name: 'Suraj Singh',
      imageUrl:
        'https://media.gettyimages.com/id/1255031793/photo/phonepe-raised-200-million-from-walmart.jpg?s=1024x1024&w=gi&k=20&c=X9C9JV41807zWuIYiW9J0xcgRM6xB0zVtaYZsPPX8I4=',
    },
    {
      uid: 4,
      name: 'Aryan Singh',
      imageUrl:
        'https://media.gettyimages.com/id/1330395683/photo/young-female-customer-using-digital-payment-method-scanning-qr-code-with-smartphone-at-a.jpg?s=1024x1024&w=gi&k=20&c=bVLezs4t5vIEbEhgWmU_DThRmno1Xa8LnCZleKoo1hQ=',
    },
    {
      uid: 5,
      name: 'Hitesh Singh',
      imageUrl:
        'https://media.gettyimages.com/id/1330395683/photo/young-female-customer-using-digital-payment-method-scanning-qr-code-with-smartphone-at-a.jpg?s=1024x1024&w=gi&k=20&c=bVLezs4t5vIEbEhgWmU_DThRmno1Xa8LnCZleKoo1hQ=',
    },
  ];

  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Status
      </Text>
      <View>
        <ScrollView style={styles.container} horizontal={true}>
          {contacts.map(({uid, name, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.userImage}
              />
              <View>
                <Text style={styles.username}>{name}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.usernameLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 3,
    paddingLeft: 10,
    color: '#67E6DC',
  },
  darkText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 3,
    paddingLeft: 10,
  },
  container: {},
  userCard: {
    flex: 1,
    flexDirection: 'column',
    padding: 18,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'green',
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    paddingTop: 4,
  },
  usernameLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginTop: 4,
  },
});
