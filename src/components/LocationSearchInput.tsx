import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";
import LineSeperator from "./LineSeperator";

type LocationSearchInputProps = {
  pickup: string;
  dropoff: string;
  onChangePickup: (text: string) => void;
  onChangeDropoff: (text: string) => void;
  onSwapLocation: () => void;
};

export default function LocationSearchInput({
  pickup,
  dropoff,
  onChangePickup,
  onChangeDropoff,
  onSwapLocation,
}: LocationSearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.searchContainer, isFocused && styles.inputFocus]}>
      <View style={styles.inputWrapper}>
        <View style={styles.inputIcon}>
          <Ionicons
            name="arrow-up"
            size={SIZES.fontMd}
            color={Colors.white}
            style={[styles.iconStyle, { backgroundColor: Colors.red400 }]}
          />
        </View>
        <TextInput
          placeholder="Pick-up Location"
          value={pickup}
          onChangeText={onChangePickup}
          style={styles.searchInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
      <LineSeperator color={Colors.borderColor} />
      <View style={styles.inputWrapper}>
        <View style={styles.inputIcon}>
          <Ionicons
            name="arrow-down"
            size={SIZES.fontMd}
            color={Colors.white}
            style={[styles.iconStyle, { backgroundColor: Colors.green400 }]}
          />
        </View>
        <TextInput
          placeholder="Drop-off Location"
          value={dropoff}
          onChangeText={onChangeDropoff}
          style={styles.searchInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
      <TouchableOpacity style={styles.swapIcon} onPress={onSwapLocation}>
        <Ionicons
          name="swap-vertical-outline"
          size={SIZES.fontMd}
          color={Colors.dark}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: "relative",
    gap: 10,
    backgroundColor: Colors.backgroundLight,
    paddingHorizontal: SIZES.spMd,
    paddingVertical: SIZES.spSm,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 12,
  },
  inputWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  inputIcon: {
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    padding: 2,
    borderRadius: 20,
  },
  swapIcon: {
    position: "absolute",
    right: 20,
    bottom: "50%",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: 0 }, { translateY: "20%" }],
    backgroundColor: Colors.white,
    width: 30,
    height: 30,
    borderRadius: 15,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    color: Colors.darkBlue,
  },
  inputFocus: {
    borderColor: Colors.violet400,
  },
});
