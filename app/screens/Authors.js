import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Author from '../components/Author';
import SearchInput from '../components/SearchInput';
import { fetchUsers } from '../store/usersSlice';

const Authors = () => {
  const [text, onChangeText] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAuthor = ({ item }) => (
    <Author name={item.name} email={item.email} />
  );

  return (
    <View style={styles.container}>
      <SearchInput onChangeText={onChangeText} text={text} />
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderAuthor}
        style={styles.authors}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  authors: {
    marginTop: 8,
  },
});

export default Authors;
