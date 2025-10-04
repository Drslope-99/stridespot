import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";

type SearchInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onFocusChange?: (isFocused: boolean) => void;
};

export default function CustomSearchInput({
  placeholder,
  onChangeText,
  value,
  onFocusChange,
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocusChange?.(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocusChange?.(false);
  };

  return (
    <View style={[styles.container, isFocused && styles.inputFocus]}>
      <View style={styles.iconBox}>
        <Ionicons name="search" size={SIZES.fontXl} color={Colors.grayIcon} />
      </View>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGray}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.backgroundLight,
    marginVertical: 8,
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    overflow: "hidden",
    borderRadius: 50,
  },
  iconBox: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 20,
    height: 45,
    textAlignVertical: "center",
    color: Colors.text,
  },
  inputFocus: {
    borderColor: Colors.violet400,
  },
});
