import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import CustomEmailInput from "../../../components/CustomEmailInput";
import TitleText from "../../../components/TitleText";
import Colors from "../../../constants/colors";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    router.push("/(auth)/login/verify");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TitleText title="Forgot Password?" />
          <Text style={styles.description}>
            A verification link will be sent to your email for your password
            reset
          </Text>
        </View>
        <CustomEmailInput
          placeholder="Enter your value"
          value={email}
          onChangeText={setEmail}
        />
        <CustomButton
          title="Reset Password"
          bgColor={Colors.purple}
          color={Colors.white}
          disabled={email === ""}
          onPress={handleSubmit}
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
  header: {
    marginBottom: 20,
  },
  description: {
    color: Colors.text,
    fontSize: 15,
    lineHeight: 22.4,
  },

  resendTime: {
    color: Colors.darkBlue,
    fontWeight: 600,
  },
});
