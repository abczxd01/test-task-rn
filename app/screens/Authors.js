import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Author from '../components/Author';
import SearchInput from '../components/SearchInput';
import { fetchUsers } from '../store/usersSlice';

const filterUsers = (users, text) => {
  try {
    return users.filter(_user => {
      const partEmail = _user.email.split('@')[0];
      const reg = new RegExp(`${text}`, 'i');
      return reg.test(_user.name) || reg.test(partEmail);
    });
  } catch (error) {}
};

const Authors = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [currentUsers, setCurrentUsers] = useState();

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  const onSubmitEditing = () => {
    const foundUsers = filterUsers(users, text);
    setCurrentUsers(foundUsers);
  };

  const onPressAuthor = (userId, authorName) =>
    navigation.navigate('Posts', {
      userId,
      authorName,
    });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (text === '') {
      setCurrentUsers(null);
    }
  }, [dispatch, text]);

  const renderAuthor = ({ item }) => (
    <Author
      name={item.name}
      email={item.email}
      id={item.id}
      onPressAuthor={() => onPressAuthor(item.id, item.name)}
    />
  );

  return (
    <View style={styles.container}>
      <SearchInput
        onChangeText={onChangeText}
        text={text}
        onSubmitEditing={onSubmitEditing}
      />
      <FlatList
        data={currentUsers && text !== '' ? currentUsers : users}
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
