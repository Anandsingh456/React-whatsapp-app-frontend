/* eslint-disable prettier/prettier */
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function LastFoot() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <View style={styles.Container}>
        <TouchableOpacity
          onPress={() => openWebsite('https://www.instagram.com/')}>
          <Text style={styles.chartIcon}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openWebsite('https://www.instagram.com/')}>
          <Text style={styles.settingIcon}>☸️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openWebsite('https://www.instagram.com/')}>
          <Text style={styles.statusIcon}>👁️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openWebsite('https://www.instagram.com/')}>
          <Text style={styles.cameraIcon}>📸</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => openWebsite('https://www.instagram.com/')}>
          <Text style={styles.shopIcon}>🛒</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.usernameLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  chartIcon: {
    fontSize: 22,
  },
  settingIcon: {
    fontSize: 22,
  },
  statusIcon: {
    fontSize: 22,
  },
  cameraIcon: {
    fontSize: 22,
  },
  shopIcon: {
    fontSize: 22,
  },
  Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 18,
    paddingBottom: 24,
    backgroundColor: '#c3ff68',
  },
  usernameLine: {
    borderBottomWidth: 2,
    borderBlockColor: '#000',
  },
});
