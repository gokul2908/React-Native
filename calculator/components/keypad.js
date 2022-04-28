import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './style'
import processing from '../src_utils/script'
let operators = ['*', '/', '+', '-'];
export default function Keypad({input_val, set_val}) {
  return [
    [7, 8, 9, '/'],
    [4, 5, 6, '*'],
    [1, 2, 3, '-'],
    ['.', 0, '+', '='],
  ].map(row => (
    <View key={row[0]} style={styles.flexrow}>
      {row.map(each => (  
        <Component_button
          key={each}
          display_val={input_val}
          onclick={set_val}
          value={each}
        />
      ))}
    </View>
  ));
}

function Component_button({display_val, onclick, value}) {
  return (
    <Pressable
      onPress={() => processing(value, onclick, display_val)}
      style={operators.includes(value) ? {...styles.button, ...styles.Operatorbutton} : styles.button}>
      <Text style={styles.textWeightage}>{value}</Text>                          
    </Pressable>
  );
}

