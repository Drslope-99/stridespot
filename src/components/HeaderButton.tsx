import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

type HeaderBtnProps = {
  title: string;
} & PressableProps;

export default function HeaderButton({ title, ...props }: HeaderBtnProps) {
  return (
    <Pressable {...props} style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ebf0ff",
    borderRadius: 100,
    margin: 5,
  },
  btnText: {
    color: Colors.purple,
    fontWeight: "bold",
  },
});
