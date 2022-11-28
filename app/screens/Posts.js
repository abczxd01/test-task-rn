import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Post from '../components/Post';
import SearchInput from '../components/SearchInput';

const Posts = ({ data }) => {
  const [text, onChangeText] = useState('');

  const renderPost = ({ item }) => <Post title={item.title} body={item.text} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{'James Smith’s Posts'}</Text>
      <SearchInput onChangeText={onChangeText} text={text} />
      {/* Made scroll */}
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderPost}
        style={styles.posts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000000',
    marginBottom: 16,
  },
  posts: {
    marginTop: 8,
  },
});

export default Posts;
