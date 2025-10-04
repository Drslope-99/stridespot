import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";

type ProfileItemProps = TouchableOpacityProps & {
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

export default function ProfileItem({
  style,
  iconName,
  iconColor,
  title,
  titleStyle,
  children,
  ...props
}: ProfileItemProps) {
  return (
    <TouchableOpacity
      style={[styles.profileLink, style]}
      {...props} // includes onPress, accessibility, etc.
    >
      <Ionicons
        name={iconName}
        size={SIZES.fontXl}
        color={iconColor || Colors.grayIcon}
      />
      <Text style={[styles.linkTitle, titleStyle]}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profileLink: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.spLg,
  },
  linkTitle: {
    color: Colors.dark,
    fontWeight: 400,
  },
});
