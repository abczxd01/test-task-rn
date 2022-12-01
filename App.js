import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Authors from './app/screens/Authors';
import Posts from './app/screens/Posts';
import { store } from './app/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.backgroundColor}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Authors />
        <Posts />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
