import React from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Author from './app/components/Author';
import Post from './app/components/Post';

const testData = [
  {
    title: 'Test',
    id: 'item1',
    text: 'Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak',
  },
  {
    title: 'Test1',
    id: 'item2',
    text: 'Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak',
  },
];

const testData2 = [
  {
    name: 'Leanne Graham',
    id: 'item1',
    email: 'Sincere@april.biz',
  },
  {
    name: 'Ervin Howell',
    id: 'item2',
    email: 'Shanna@melissa.tv',
  },
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const renderPost = ({ item }) => <Post title={item.title} body={item.text} />;
  const renderAuthor = ({ item }) => (
    <Author name={item.name} email={item.email} />
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" />
      <FlatList
        data={testData}
        keyExtractor={item => item.id}
        renderItem={renderPost}
      />
      <FlatList
        data={testData2}
        keyExtractor={item => item.id}
        renderItem={renderAuthor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundColor: { backgroundColor: '#fff' },
});

export default App;
