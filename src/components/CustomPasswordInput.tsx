import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/colors";

type PasswordProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  label?: string;
};

export default function CustomPasswordInput({
  value,
  onChangeText,
  placeholder,
  label,
}: PasswordProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const validatePassword = (text: string) => {
    const hasValidCharacters =
      /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{}|;:'",.<>/?`~\\]*$/.test(text);
    const hasLetter = /[a-zA-Z]/.test(text);
    const hasDigit = /\d/.test(text);

    if (!text.length) {
      return "password field cannot be empty";
    } else if (text.length < 8) {
      return "password must be atleast 8 characters long";
    } else if (!hasValidCharacters) {
      return "password contains invalid characters";
    } else if (!hasDigit) {
      return "password must contain atleast one digit";
    } else if (!hasLetter) {
      return "password must contain atleast one letter";
    } else {
      return "";
    }
  };

  const handleChange = (text: string) => {
    onChangeText(text);

    if (isFocused) {
      const validationError = validatePassword(text);
      setError(validationError);
    }
  };

  const handleBlur = () => {
    const validationError = validatePassword(value);
    setError(validationError);
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label || "Password"}</Text>
      <View
        style={[
          styles.passwordWrapper,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}
      >
        <TextInput
          value={value}
          onChangeText={handleChange}
          placeholder={placeholder}
          placeholderTextColor={Colors.lightGray}
          secureTextEntry={!visible}
          style={styles.passwordInput}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
        />
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => setVisible((show) => !show)}
        >
          <Feather
            name={visible ? "eye" : "eye-off"}
            size={18}
            color={Colors.text}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
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
  passwordWrapper: {
    position: "relative",
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  eyeIcon: {
    // position: "absolute",
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 20,
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.backgroundLight,
  },

  iconWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundLight,
    borderRadius: 8,
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
