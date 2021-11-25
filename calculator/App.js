import React, {useState} from 'react';
import {View} from 'react-native';
import Display from './components/display';
import Keypad from './components/keypad';
import styles  from './components/style';

const App = () => {
  const [input_val, set_val] = useState('');
  return (
    <View style={styles.screen}>
       <Display input_val={input_val} set_val={set_val} />
       <Keypad input_val={input_val} set_val={set_val}/> 
    </View>
  );
};

export default App;
