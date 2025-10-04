import { Feather } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Text, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

type FeatherIconName = ComponentProps<typeof Feather>["name"];

type LinkProps = {
  color: string;
  bgColor: string;
  iconName: FeatherIconName;
  title?: string;
  onPress?: () => void;
};

export default function HeaderNavLink({
  color,
  bgColor,
  iconName,
  title,
  onPress,
}: LinkProps) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Feather
        name={iconName}
        size={24}
        color={color}
        style={{
          backgroundColor: bgColor,
          padding: 10,
          borderRadius: 8,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: Colors.dark,
          fontWeight: 500,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
