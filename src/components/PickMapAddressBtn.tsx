import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";

type buttonProps = {
  title: string;
  background?: string;
  borderCol?: string;
  onPress?: () => void;
};

export default function PickMapAddressBtn({
  title,
  background,
  borderCol,
  onPress,
}: buttonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.locateBtn,
        {
          backgroundColor: background || Colors.white,
          borderColor: borderCol || "transparent",
        },
      ]}
    >
      <Ionicons name="locate" size={24} color={Colors.purple} />
      <Text style={styles.locateText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  locateBtn: {
    marginBlock: SIZES.spMd,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: SIZES.spSm,
    borderRadius: 50,
    gap: SIZES.spSm,
    borderWidth: 1,
  },
  locateText: {
    fontWeight: 500,
  },
});
