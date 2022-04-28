export default function processing(val, onclick, display_val) {
  try {
    if (operators.includes(val)) {
      addOperator(display_val, onclick, val);
    } else if (val == '=') {
      resultGenerator(display_val, onclick);
    } else if (val == '.') {
      add_dot(display_val, onclick);
    } else {
      onclick(display_val + String(val));
    }
  } catch (error) {
    console.log(error);
  }
}

let operators = ['*', '/', '+', '-'];


function add_dot(input_data, set_data) {
  let index = input_data.length - 1;
  while (index) {
    if (operators.includes(input_data[index])) {
      set_data(input_data + '.');
    } else if (input_data[index] == '.') {
      return;
    }
    index -= 1;
  }
  set_data(input_data + '.');
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
  if (val.length == 0 || operators.includes(val[val.length - 1])) {
    return false;
  }
  let index = 0;
  while (index < val.length) {
    if (val[index] == '.') {
      index += 1;
      if (index < val.length && val[index] == '.') {
        return false;
      }
    }
    index += 1;
  }
  return true;
}

function addOperator(input_data, set_data, val) {
  if (input_data.length == 0) return;
  if (operators.includes(input_data[input_data.length - 1])) {
    if (input_data[input_data.length - 1] != val) {
      set_data(input_data.replace(/.$/, val));
    }
  } else {
    set_data(input_data + val);
  }
}
