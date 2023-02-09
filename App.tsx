/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Character from './src/features/Character';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Character />
      <Character />
    </SafeAreaView>
  );
}

export default App;
