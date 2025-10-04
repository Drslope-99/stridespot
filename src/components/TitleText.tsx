import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

type TitleProps = {
  title: string;
};

export default function TitleText({ title }: TitleProps) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.darkBlue,
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 10,
  },
});
