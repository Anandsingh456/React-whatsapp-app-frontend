/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HeaderOne() {
  return (
    <View>
      <View style={styles.headerSections}>
        <Text style={styles.headingText}>Whatsapp</Text>
        <Text style={styles.searchBar}>🔍</Text>
        <Text style={styles.MoreItems}>🟰</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: 5,
    paddingBottom: 6,
    color: '#6AB04A',
    paddingRight: 190,
  },
  searchBar: {
    fontSize: 13,
    // paddingRight: 10,
    paddingTop: 14,
    paddingBottom: 6,
    paddingRight: 16,
  },
  headerSections: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  MoreItems: {
    paddingTop: 14,
    paddingBottom: 6,
    // paddingLeft: 16,
    paddingRight: 16,
  },
});
