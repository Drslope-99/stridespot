import { View } from "react-native";
import Colors from "../constants/colors";

type LineSeperatorProps = {
  color?: string;
  margin?: number;
};

export default function LineSeperator({ color, margin }: LineSeperatorProps) {
  return (
    <View
      style={{
        borderWidth: 0.3,
        marginVertical: margin || 0,
        borderColor: color || Colors.grayIcon,
      }}
    ></View>
  );
}
