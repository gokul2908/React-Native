import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './style'

export default function Display({input_val, set_val}) {
  return (
    <Pressable onPress={() => set_val('')} style={styles.display}>
      <Text style={styles.textWeightage}>{input_val}</Text>
    </Pressable>
  );
}
