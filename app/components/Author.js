import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DARK, GREY } from '../colors';

const Author = ({ name, email }) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo} />
      <View style={styles.flex}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.postCount}>{'5 posts >'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 16,
  },
  flex: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: DARK,
  },
  email: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: GREY,
  },
  photo: {
    backgroundColor: '#6FCF97',
    marginRight: 16,
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  postCount: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    color: DARK,
  },
});
export default Author;
