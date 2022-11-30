import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Author from '../components/Author';
import SearchInput from '../components/SearchInput';

const Authors = ({ data }) => {
  const [text, onChangeText] = useState('');

  const renderAuthor = ({ item }) => (
    <Author name={item.name} email={item.email} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Authors'}</Text>
      <SearchInput onChangeText={onChangeText} text={text} />
      <FlatList
        data={data}
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
    flex: 1,
  },
  title: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#000000',
    marginBottom: 16,
  },
  authors: {
    marginTop: 8,
  },
});

export default Authors;
