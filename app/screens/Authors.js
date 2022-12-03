import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Author from '../components/Author';
import SearchInput from '../components/SearchInput';
import { fetchUsers } from '../store/usersSlice';

const Authors = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [currentUser, setCurrentUser] = useState();

  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  const onSubmitEditing = () => {
    const user = users.find(_user => {
      const splittedName = _user.name.split(' ');
      const splittedEmail = _user.email.split('@');
      const isNameFound =
        _user.name === text ||
        splittedName[0] === text ||
        splittedName[1] === text;
      const isEmailFound = _user.email === text || splittedEmail[0] === text;

      return isNameFound || isEmailFound;
    });

    setCurrentUser(user);
  };

  const onPressAuthor = userId =>
    navigation.navigate('Posts', {
      userId,
    });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (text === '') {
      setCurrentUser(null);
    }
  }, [dispatch, text]);

  const renderAuthor = ({ item }) => (
    <Author
      name={item.name}
      email={item.email}
      id={item.id}
      onPressAuthor={() => {
        onPressAuthor(item.id);
      }}
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
        data={currentUser && text !== '' ? [currentUser] : users}
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
