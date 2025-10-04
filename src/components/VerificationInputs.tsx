import { useRef } from "react";
import {
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  TextInput as RNTextInput,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";
import Colors from "../constants/colors";

type VerificationInputProps = {
  value: string[];
  onChange: (value: string[]) => void;
  onSubmit?: (code: string) => void;
  error: boolean;
};

export default function VerificationInput({
  value,
  onChange,
  onSubmit,
  error,
}: VerificationInputProps) {
  const inputs = useRef<(RNTextInput | null)[]>([]);

  const handleChange = (text: string, index: number): void => {
    if (!/^\d?$/.test(text)) return;

    const newCode = [...value];
    newCode[index] = text;
    onChange(newCode);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ): void => {
    if (e.nativeEvent.key === "Backspace") {
      const newCode = [...value];

      if (value[index] === "") {
        if (index > 0) {
          newCode[index - 1] = "";
          onChange(newCode);
          inputs.current[index - 1]?.focus();
        }
      } else {
        newCode[index] = "";
        onChange(newCode);
      }
    }
  };

  const handleBoxPress = (index: number): void => {
    inputs.current[index]?.focus();
  };

  const handleSubmit = (): void => {
    const input = value.join("");
    if (isFinite(Number(input)) && input.length === 6) {
      onSubmit?.(input);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        {value.map((digit, index) => (
          <Pressable key={index} onPress={() => handleBoxPress(index)}>
            <TextInput
              ref={(ref) => (inputs.current[index] = ref)}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              onSubmitEditing={handleSubmit}
              keyboardType="number-pad"
              maxLength={1}
              style={[
                styles.input,
                digit !== "" && styles.filledInput,
                error && styles.errorInput,
              ]}
              autoFocus={index === 0}
              selectionColor={Colors.lightGray}
            />
          </Pressable>
        ))}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    width: 45,
    height: 45,
    borderWidth: 1.2,
    borderColor: Colors.borderColor,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 400,
    backgroundColor: Colors.backgroundLight,
    color: Colors.darkBlue,
  },
  filledInput: {
    borderColor: Colors.violet400,
  },
  errorInput: {
    borderColor: Colors.red400,
  },
});
