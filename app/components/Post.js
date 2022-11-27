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
    paddingHorizontal: 18,
    paddingVertical: 12,
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
