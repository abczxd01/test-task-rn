import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Authors from './app/screens/Authors';
import Posts from './app/screens/Posts';

const testData = [
  {
    title: 'Test',
    id: 'item1',
    text: 'Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak',
  },
  {
    title: 'Test',
    id: 'item2',
    text: 'Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak',
  },
  {
    title: 'Test',
    id: 'item3',
    text: 'Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak',
  },
  {
    title: 'Test',
    id: 'item4',
    text: 'Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak Asdsds test big boy ololshak Asdsds test big boy ololshakAsdsds test big boy ololshak',
  },
  {
    title: 'Test1',
    id: 'item5',
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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Authors data={testData2} />
      <Posts data={testData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
