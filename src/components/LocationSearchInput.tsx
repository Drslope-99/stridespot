import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";
import LineSeperator from "./LineSeperator";

type LocationSearchInputProps = {
  pickup: string;
  dropoff: string;
  onChangePickup?: (text: string) => void;
  onChangeDropoff?: (text: string) => void;
  onSwapLocation?: () => void;
  onFocusField?: (field: "pickup" | "dropoff") => void;
  disabled?: boolean;
};

export default function LocationSearchInput({
  pickup,
  dropoff,
  onChangePickup,
  onChangeDropoff,
  onSwapLocation,
  onFocusField,
  disabled = false,
}: LocationSearchInputProps) {
  const [focusedField, setFocusedField] = useState<"pickup" | "dropoff" | null>(
    null
  );

  return (
    <View style={[styles.searchContainer, focusedField && styles.inputFocus]}>
      <View style={styles.inputWrapper}>
        <View style={[styles.inputIcon, { backgroundColor: Colors.red400 }]}>
          <Ionicons
            name="arrow-up"
            size={SIZES.fontMd}
            color={Colors.white}
            style={[styles.iconStyle]}
          />
        </View>
        <TextInput
          placeholder="Pick-up Location"
          value={pickup}
          onChangeText={onChangePickup}
          style={styles.searchInput}
          onFocus={() => {
            setFocusedField("pickup");
            onFocusField?.("pickup");
          }}
          onBlur={() => setFocusedField(null)}
          editable={!disabled}
        />
      </View>
      <LineSeperator color={Colors.borderColor} />
      <View style={styles.inputWrapper}>
        <View style={[styles.inputIcon, { backgroundColor: Colors.green400 }]}>
          <Ionicons
            name="arrow-down"
            size={SIZES.fontMd}
            color={Colors.white}
            style={styles.iconStyle}
          />
        </View>
        <TextInput
          placeholder="Drop-off Location"
          value={dropoff}
          onChangeText={onChangeDropoff}
          style={styles.searchInput}
          onFocus={() => {
            setFocusedField("dropoff");
            onFocusField?.("dropoff");
          }}
          onBlur={() => setFocusedField(null)}
          editable={!disabled}
        />
      </View>
      {!disabled && (
        <TouchableOpacity style={styles.swapIcon} onPress={onSwapLocation}>
          <Ionicons
            name="swap-vertical-outline"
            size={SIZES.fontMd}
            color={Colors.dark}
          />
        </TouchableOpacity>
      )}
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
    alignItems: "center",
  },
  inputIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    padding: 2,
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
