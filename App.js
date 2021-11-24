import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

let operator_arr = ["*", "/", "+", "-"];
// button component
function Component_button({ value, onclick, display_val }) {
  return (
    <Pressable
      onPress={() =>
        operator_arr.includes(value)
          ? addOperator(display_val, onclick, value)
          : onclick(display_val + String(value))
      }
      style={styles.Operatorbutton}
    >
      <Text style={styles.textWeightage}>{value}</Text>
    </Pressable>
  );
}

const App = () => {
  const [input_val, set_val] = useState("");

  return (
    <View style={styles.flexcol}>
      <Pressable onPress={() => set_val("")} style={styles.display}>
        <Text style={styles.textWeightage}>{input_val}</Text>
      </Pressable>
      <View style={styles.flexrow}>
        {[7, 8, 9, "/"].map((each) => (
          <Component_button
            key={each}
            display_val={input_val}
            onclick={set_val}
            value={each}
          />
        ))}
      </View>
      <View style={styles.flexrow}>
        {[4, 5, 6, "*"].map((each) => (
          <Component_button
            key={each}
            display_val={input_val}
            onclick={set_val}
            value={each}
          />
        ))}
      </View>
      <View style={styles.flexrow}>
        {[1, 2, 3, "-"].map((each) => (
          <Component_button
            key={each}
            display_val={input_val}
            onclick={set_val}
            value={each}
          />
        ))}
      </View>
      <View style={styles.flexrow}>
        <Pressable
          onPress={() => add_dot(input_val, set_val)}
          style={styles.equal2button}
        >
          <Text style={styles.textWeightage}>.</Text>
        </Pressable>
        {[0, "+"].map((each) => (
          <Component_button
            key={each}
            display_val={input_val}
            onclick={set_val}
            value={each}
          />
        ))}
        <Pressable
          onPress={() => resultGenerator(input_val, set_val)}
          style={styles.equal2button}
        >
          <Text style={styles.textWeightage}>=</Text>
        </Pressable>
      </View>
    </View>
  );
};
function add_dot(input_data, set_data) {
  index = input_data.length - 1;
  while (index) {
    if (operator_arr.includes(input_data[index])) {
      set_data(input_data + ".");
    } else if (input_data[index] == ".") {
      return;
    }
    index -= 1;
  }
  set_data(input_data + ".");
}

function resultGenerator(input_data, set_data) {
  if (!check_for_error(input_data)) return;
  try {
    set_data(String(eval(input_data)));
  } catch (err) {
    console.log(err);
  }
}

function check_for_error(val) {
  if (val.length == 0 || operator_arr.includes(val[val.length - 1])) {
    return false;
  }
  let index = 0;
  while (index < val.length) {
    if (val[index] == ".") {
      index += 1;
      if (index < val.length && val[index] == ".") {
        return false;
      }
    }
    index += 1;
  }
  return true;
}

function addOperator(input_data, set_data, val) {
  if (input_data.length == 0) return;
  if (operator_arr.includes(input_data[input_data.length - 1])) {
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
    fontSize: 40,
    color: "white",
    textAlignVertical: "center",
    alignSelf: "center",
  },
  display: {
    fontSize: 30,
    height: "50%",
    backgroundColor: "black",
  },
  button: {
    backgroundColor: "#2e2e2e",
    paddingHorizontal: 8,
    paddingVertical: 9,
    borderRadius: 22,
    height: "90%",
    width: "22%",
    textAlignVertical: "center",
    margin: 5,
  },
  flexrow: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: "12%",
  },
  flexcol: {
    flexDirection: "column",
    height: "100%",
    marginTop: 4,
    backgroundColor: "black",
  },
  Operatorbutton: {
    backgroundColor: "#d3de59",
    paddingHorizontal: 8,
    paddingVertical: 9,
    borderRadius: 22,
    height: "90%",
    width: "22%",
    textAlignVertical: "center",
    margin: 5,
  },
  equal2button: {
    backgroundColor: "#e63e2c",
    paddingHorizontal: 8,
    paddingVertical: 9,
    borderRadius: 22,
    height: "90%",
    width: "22%",
    textAlignVertical: "center",
    margin: 5,
  },
});

export default App;
