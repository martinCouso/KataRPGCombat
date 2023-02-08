import React from 'react';
import {Text, View} from 'react-native';

interface Props {}
const Character: React.FC<Props> = () => {
  return (
    <View>
      <Text testID={'health-points'}>1000hp</Text>
      <Text testID={'lvl'}>1</Text>
      <Text testID={'status'}>alive</Text>
    </View>
  );
};

export default Character;
