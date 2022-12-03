import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';

const searchIcon = require('../../assets/search.png');

const SearchInput = ({ onChangeText, onSubmitEditing, text }) => {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={'rgba(0,0,0,0.44)'}
        style={styles.searchInput}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  searchIcon: {
    position: 'absolute',
    top: 5,
  },
  searchInput: {
    backgroundColor: 'rgba(0,0,0,0.14)',
    color: '#000',
    borderRadius: 4,
    paddingLeft: 40,
    width: '100%',
  },
});

export default SearchInput;
