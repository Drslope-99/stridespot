import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";
import CustomButton from "./CustomButton";

type Props = {
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBgColor: string;
  message: string;
  buttonText: string;
  onConfirm: () => void;
};

export default function ConfirmAction({
  iconName,
  iconColor,
  iconBgColor,
  message,
  buttonText,
  onConfirm,
}: Props) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconBox,
          { backgroundColor: iconBgColor, borderRadius: 40 },
        ]}
      >
        <Ionicons name={iconName} size={SIZES.font32} color={iconColor} />
      </View>
      <Text style={styles.logoutInfo}>{message}</Text>
      <View style={styles.btnBox}>
        <CustomButton
          onPress={onConfirm}
          title={buttonText}
          bgColor={iconColor || Colors.red400}
          color={Colors.white}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  logoutInfo: {
    textAlign: "center",
    fontSize: SIZES.fontLg,
    fontWeight: 500,
    color: Colors.dark,
    marginVertical: SIZES.spLg,
  },
  btnBox: {
    marginTop: "auto",
  },
});
