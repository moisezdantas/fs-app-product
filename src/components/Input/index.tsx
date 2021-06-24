import React from "react";
import { TextInput, KeyboardType , Text, TextInputProps} from "react-native";

import styles from "./styles";


export default function Input({...rest} : TextInputProps) {
 
  return (
    <TextInput
    style={styles.input}
    {...rest}
      underlineColorAndroid="transparent"
    />
  );
}
