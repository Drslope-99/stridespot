import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../constants/colors";

type EmailProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
};

export default function CustomEmailInput({
  value,
  onChangeText,
  placeholder,
  disabled = false,
}: EmailProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState("");

  const validate = (text: string) => {
    const input = (text || "").trim();

    if (input === "") {
      return "Email field cannot be empty.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input)
    ) {
      return "Please, enter a valid email address!";
    } else {
      return "";
    }
  };

  const handleChange = (text: string) => {
    onChangeText(text);

    if (isFocused) {
      const validationError = validate(text);
      setError(validationError);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    const validationError = validate(value);
    setError(validationError);
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGray}
        keyboardType="email-address"
        onChangeText={handleChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={!disabled}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 6,
    color: Colors.darkBlue,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.backgroundLight,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 50,
    textAlignVertical: "center",
    color: Colors.text,
  },
  inputFocused: {
    borderColor: Colors.purple,
  },
  inputError: {
    borderColor: Colors.red200,
  },
  error: {
    marginTop: 2,
    fontSize: 13,
    color: Colors.red400,
  },
});
