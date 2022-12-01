import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Post from '../components/Post';
import SearchInput from '../components/SearchInput';
import { fetchPosts } from '../store/postsSlice';

const Posts = () => {
  const [text, onChangeText] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPost = ({ item }) => <Post title={item.title} body={item.body} />;

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput onChangeText={onChangeText} text={text} />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderPost}
        style={styles.posts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  posts: {
    marginTop: 8,
  },
});

export default Posts;
