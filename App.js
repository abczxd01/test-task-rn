import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Authors from './app/screens/Authors';
import Posts from './app/screens/Posts';
import { store } from './app/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const headerOptions = {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerShadowVisible: false,
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    },
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.flex}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Authors"
              component={Authors}
              options={headerOptions}
            />
            <Stack.Screen
              options={headerOptions}
              name="Posts"
              component={Posts}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default App;
