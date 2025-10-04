import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
import TitleText from "../../../components/TitleText";
import VerificationInput from "../../../components/VerificationInputs";
import Colors from "../../../constants/colors";

const correctCode = "123456";

export default function VerificationScreen() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const [error, setError] = useState(false);
  const router = useRouter();

  const { phone } = useLocalSearchParams();

  const phoneStr = phone as string;

  const disabled = code.join("").length < 6;

  const handleCodeSubmit = (completeCode: string) => {
    if (completeCode !== correctCode || completeCode.length < 6) {
      setError(true);
    } else {
      setError(false);
      router.replace("/signup/register");
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TitleText title="Enter verification code" />
            <Text style={styles.description}>
              Enter the verification code sent to your number{" "}
              {maskPhoneNumber(phoneStr)} to verify your account
            </Text>
          </View>
          <VerificationInput
            value={code}
            onChange={setCode}
            onSubmit={handleCodeSubmit}
            error={error}
          />
          <Text style={styles.resendText}>
            Didn`t receive your code? Resend in
            <Text style={styles.resendTime}> 00:30</Text>
          </Text>

          <Text style={styles.link} onPress={() => router.back()}>
            Change your phone number
          </Text>
        </View>
        <View style={styles.content}>
          <CustomButton
            title="Verify"
            bgColor={Colors.purple}
            color={Colors.white}
            onPress={() => handleCodeSubmit(code.join(""))}
            disabled={disabled}
          />
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },

  description: {
    color: Colors.text,
    fontSize: 15,
    lineHeight: 22.4,
  },
  resendText: {
    marginVertical: 25,
    fontSize: 15,
    color: Colors.text,
  },
  resendTime: {
    color: Colors.darkBlue,
    fontWeight: 600,
  },
  link: {
    fontSize: 15,
    color: Colors.darkBlue,
    textDecorationLine: "underline",
    textDecorationColor: "red",
  },
});

function maskPhoneNumber(phone: string) {
  if (!phone || phone.length < 7) return phone; // Too short to mask

  const prefix = phone.slice(0, 4); // e.g. "+234"
  const suffix = phone.slice(-4); // last 4 digits
  const masked = "*".repeat(phone.length - prefix.length - suffix.length);

  return `${prefix}${masked}${suffix}`;
}
