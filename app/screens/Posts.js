import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Post from '../components/Post';
import SearchInput from '../components/SearchInput';
import { fetchPosts } from '../store/postsSlice';

const filterPosts = (posts, text) => {
  try {
    return posts.filter(_post => {
      const reg = new RegExp(`${text}`, 'i');
      return reg.test(_post.title) || reg.test(_post.body);
    });
  } catch (error) {}
};

const Posts = ({ route, navigation }) => {
  const { userId, authorName } = route.params;
  const [text, onChangeText] = useState('');
  const [currentPosts, setCurrentPosts] = useState();

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    navigation.setOptions({ headerTitle: `${authorName} Posts` });
  }, [navigation, authorName]);

  useEffect(() => {
    if (text === '') {
      setCurrentPosts(null);
    }
  }, [dispatch, text]);

  const onSubmitEditing = () => {
    const foundPosts = filterPosts(posts, text);
    setCurrentPosts(foundPosts);
  };

  const renderPost = ({ item }) => <Post title={item.title} body={item.body} />;

  return (
    <SafeAreaView style={styles.container}>
      <SearchInput
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        text={text}
      />
      <FlatList
        data={currentPosts && text !== '' ? currentPosts : posts}
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
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  posts: {
    marginTop: 8,
  },
});

export default Posts;
