import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";

type Props = {
  children: ReactNode;
};

export default function ProfileSection({ children }: Props) {
  return <View style={styles.profileSection}>{children}</View>;
}

const styles = StyleSheet.create({
  profileSection: {
    backgroundColor: Colors.backgroundLight,
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    paddingHorizontal: SIZES.spLg,
    paddingVertical: SIZES.spLg,
    borderRadius: SIZES.radXl,
    marginVertical: SIZES.spLg,
  },
});
