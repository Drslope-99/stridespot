import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../constants/colors";

type TextInputProps = {
  label?: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
};

export default function CustomTextInput({
  label,
  value,
  onChangeText,
  placeholder,
  disabled = false,
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState("");

  const validate = (text: string) => {
    const input = (text || "").trim();

    if (input === "") {
      setError("This field is required.");
    } else if (text.length < 3) {
      setError("Must be at least 3 characters.");
    } else if (!/^[A-Za-z\s'-]+$/.test(input)) {
      setError("Only letters, spaces, hyphens and apostrophes allowed.");
    } else {
      setError("");
    }
  };

  const handleBlur = () => {
    validate(value);
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGray}
        onChangeText={onChangeText}
        value={value}
        editable={!disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
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
