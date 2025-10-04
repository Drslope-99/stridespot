import { Pressable, Text } from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";

type ButtonProps = {
  children?: React.ReactNode;
  title: string;
  bgColor: string;
  color?: string;
  borderCol?: string;
  onPress?: () => void;
  disabled?: boolean;
};

export default function CustomButton({
  children,
  title,
  bgColor,
  color,
  borderCol,
  onPress,
  disabled = false,
}: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          backgroundColor: disabled ? Colors.borderColor : bgColor,
          padding: 14,
          borderRadius: 100,
          marginVertical: 8,
          borderWidth: 1,
          borderColor: borderCol || "transparent",
        },
        pressed && { transform: [{ scale: 0.97 }], opacity: 0.7 },
      ]}
      onPress={onPress}
    >
      {children}
      <Text
        style={{
          textAlign: "center",
          color: color || Colors.darkBlue,
          fontSize: SIZES.fontMd,
          fontWeight: 500,
          letterSpacing: 1.1,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
