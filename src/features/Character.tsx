import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';

interface Props {}

const Character: React.FC<Props> = () => {
  const [health, setHealth] = useState<number>(1000);
  const [alive, setAlive] = useState<boolean>(true);

  const onPressReceiveDmg = () => {
    setHealth(prevState => prevState - 100);
  };

  useEffect(() => {
    if (health <= 0) {
      setAlive(false);
    }
  }, [health, setAlive]);

  /*const alive = useMemo(()=>{
    if (health <= 0) {
      return false;
    }
    return true;
  }, [health])*/

  return (
    <View>
      <Text testID={'health-points'}>{health}hp</Text>
      <Text testID={'lvl'}>1</Text>
      <Text testID={'status'}>{alive ? 'alive' : 'dead'}</Text>
      <Button
        onPress={onPressReceiveDmg}
        title="Attack"
        testID={'receiveDamage'}
      />
    </View>
  );
};

export default Character;
