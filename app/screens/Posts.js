import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Post from '../components/Post';
import SearchInput from '../components/SearchInput';
import { fetchPosts } from '../store/postsSlice';

const findPost = (posts, text) => {
  return posts.find(_post => {
    const splittedTitle = _post.title.toLowerCase().split(' ');
    const isPostFound = splittedTitle.find(word => word === text.toLowerCase());
    return isPostFound;
  });
};

const Posts = ({ route }) => {
  const { userId } = route.params;
  const [text, onChangeText] = useState('');
  const [currentPost, setCurrentPost] = useState();

  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (text === '') {
      setCurrentPost(null);
    }
  }, [dispatch, text]);

  const onSubmitEditing = () => {
    const post = findPost(posts, text);
    setCurrentPost(post);
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
        data={currentPost && text !== '' ? [currentPost] : posts}
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
