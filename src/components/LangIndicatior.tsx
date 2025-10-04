import React from "react";
import { View } from "react-native";
import Colors from "../constants/colors";

type Props = {
  bgColor?: string;
};

export default function LangIndicatior({ bgColor }: Props) {
  return (
    <View
      style={{
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: bgColor || Colors.grayIcon,
        marginLeft: "auto",
      }}
    ></View>
  );
}
