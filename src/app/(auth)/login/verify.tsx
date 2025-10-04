import { Image, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import Colors from "../../../constants/colors";

import { useRouter } from "expo-router";

export default function VerifyEmailScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../../assets/images/mailsent.png")}
            style={styles.imageIcon}
          />
        </View>
        <Text style={styles.titleText}>Check your Email</Text>
        <Text style={styles.description}>
          we have sent an email to your account{" "}
          <Text style={{ fontWeight: "bold" }}>enam*****@gmail.com</Text>. Click
          the link in the email to reset your password
        </Text>
      </View>
      <CustomButton
        title="Open Email"
        bgColor={Colors.purple}
        color={Colors.white}
        onPress={() => router.replace("/(auth)/login/resetPassword")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    backgroundColor: Colors.white,
  },
  section: {
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    backgroundColor: Colors.backgroundLight,
    borderRadius: 100,
  },
  imageIcon: {
    width: "100%",
    height: "100%",
  },
  titleText: {
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    color: Colors.grayIcon,
    fontSize: 14,
  },
});
