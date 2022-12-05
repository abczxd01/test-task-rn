import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DARK, GREY } from '../colors';

const Post = ({ title, body }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 18,
    paddingVertical: 12,
    flex: 1,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: DARK,
  },
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: GREY,
    marginTop: 9,
  },
});

export default Post;
