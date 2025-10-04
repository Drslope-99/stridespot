import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import CustomPasswordInput from "../../../components/CustomPasswordInput";
import TitleText from "../../../components/TitleText";
import Colors from "../../../constants/colors";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TitleText title="Create new password" />
        <CustomPasswordInput
          label="Enter new password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
        />
        <CustomPasswordInput
          label="Confirm new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Enter password"
        />
        <CustomButton
          title="Create password"
          bgColor={Colors.purple}
          color={Colors.white}
          //   disabled={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    paddingHorizontal: 20,
  },
});
