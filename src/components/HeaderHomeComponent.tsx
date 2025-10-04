import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";

type headerProps = {
  children: ReactNode;
};

export default function HeaderHomeComponent({ children }: headerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
});
