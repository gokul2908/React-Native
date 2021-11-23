/**
 * Sample React Native App
 * https://github.com/facebook/react-native djsklfalsdjfls dfsjkldfsd fkljsd flkjsdflkjsdflj sdfj
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import type { Node } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  Pressable,
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

function Component1({ value, onclick }) {
  return (
    <View>
      <Button onPress={() => onclick(input_val + "3")} title={value} />
    </View>
  );
}
const App = () => {
  const [input_val, set_val] = useState("");

  return (
    <View style={styles.flexcol}>
      <Pressable onPress={() => set_val("")} style={styles.display}>
        <Text style={styles.textWeightage}>{input_val}</Text>
        {/* <Component1 value={input_val} onclick={set_val}/> */}
      </Pressable>

      <View style={styles.flexrow}>
        <Pressable
          onPress={() => set_val(input_val + "7")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>7</Text>
        </Pressable>
        <Pressable
          onPress={() => set_val(input_val + "8")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>8</Text>
        </Pressable>
        <Pressable
          onPress={() => set_val(input_val + "9")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>9</Text>
        </Pressable>
        <Pressable
          onPress={() => addOperator(input_val, set_val, "/")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>/</Text>
        </Pressable>
      </View>
      <View style={styles.flexrow}>
        <Pressable
          onPress={() => set_val(input_val + "4")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>4</Text>
        </Pressable>
        <Pressable
          onPress={() => set_val(input_val + "5")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>5</Text>
        </Pressable>
        <Pressable
          onPress={() => set_val(input_val + "6")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>6</Text>
        </Pressable>
        <Pressable
          onPress={() => addOperator(input_val, set_val, "*")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>x</Text>
        </Pressable>
      </View>
      <View style={styles.flexrow}>
        <Pressable
          onPress={() => set_val(input_val + "1")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>1</Text>
        </Pressable>
        <Pressable
          onPress={() => set_val(input_val + "2")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>2</Text>
        </Pressable>
        <Pressable
          onPress={() => set_val(input_val + "3")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>3</Text>
        </Pressable>
        <Pressable
          onPress={() => addOperator(input_val, set_val, "-")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>-</Text>
        </Pressable>
      </View>
      <View style={styles.flexrow}>
        <Pressable
          onPress={() => set_val(input_val + ".")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>.</Text>
        </Pressable>
        <Pressable
          onPress={() => set_val(input_val + "0")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>0</Text>
        </Pressable>
        <Pressable
          onPress={() => addOperator(input_val, set_val, "+")}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>+</Text>
        </Pressable>
        <Pressable
          onPress={() => resultGenerator(input_val, set_val)}
          style={styles.button}
        >
          <Text style={styles.textWeightage}>=</Text>
        </Pressable>
      </View>
    </View>
  );
};

function resultGenerator(input_data, set_data) {
  try {
    set_data(String(eval(input_data)));
  } catch (err) {
    console.log(err);
  }
}

function addOperator(input_data, set_data, val) {
  if (["*", "/", "+", "-"].includes(input_data[input_data.length - 1])) {
    if (input_data[input_data.length - 1] != val) {
      set_data(input_data.replace(/.$/, val));
    }
  } else {
    set_data(input_data + val);
  }
}

const styles = StyleSheet.create({
  textWeightage: {
    fontWeight: "bold",
    fontSize: 60,
    color: "white",
    textAlignVertical: "center",
    alignSelf: "center",
  },
  display: {
    fontSize: 60,
    height: "18%",
    backgroundColor: "black",
  },
  button: {
    backgroundColor: "#2e2e2e",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 22,
    height: "80%",
    width: "22%",
    textAlignVertical: "center",
    margin: 5,
  },
  flexrow: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "20%",
  },
  flexcol: {
    flexDirection: "column",
    height: "100%",
    marginTop: 4,
  },
  buttontext: {
    textAlignVertical: "center",
  },
});

export default App;
