import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Toast from "react-native-toast-message";
import CustomButton from "../../../components/CustomButton";
import CustomIcon from "../../../components/CustomIcon";
import CustomPhoneInput from "../../../components/CustomPhoneInput";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
import TitleText from "../../../components/TitleText";
import Colors from "../../../constants/colors";
const googleIcon = require("../../../../assets/images/googlelogo.png");
const appleIcon = require("../../../../assets/images/applelogo.png");

const SignUpScreen = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const [phoneValid, setPhoneValid] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handlePhoneChange = (number: string) => {
    setPhoneInput(number);
  };

  const router = useRouter();

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "Invalid Phone input",
      text2: "Please enter a valid phone number!",
      text1Style: {
        fontSize: 15,
        fontWeight: 700,
      },

      text2Style: {
        fontSize: 12,
      },
      position: "top",
      visibilityTime: 2000,
    });
  };

  const handleSubmit = () => {
    console.log(phoneInput);
    if (phoneValid) {
      router.push({
        pathname: "/signup/verify",
        params: { phone: phoneInput },
      });
    } else {
      setPhoneError(true);
      showToast();
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <View>
          <TitleText title="Welcome to Spotride!" />
          <Text style={styles.description}>
            Please enter your phone number to continue
          </Text>
          <CustomPhoneInput
            onPhoneChange={handlePhoneChange}
            value={phoneInput}
            onValidityChange={setPhoneValid}
            showError={phoneError}
          />

          <CustomButton
            title="Continue"
            bgColor={Colors.purple}
            color={Colors.white}
            onPress={handleSubmit}
            disabled={false}
          />
        </View>

        <Text style={styles.or}>Or</Text>

        <View>
          <CustomButton
            title="Continue with Google"
            bgColor={Colors.backgroundLight}
            color={Colors.darkBlue}
            borderCol={Colors.borderColor}
          >
            <CustomIcon src={googleIcon} />
          </CustomButton>
          <CustomButton
            title="Continue with Apple"
            bgColor={Colors.backgroundLight}
            color={Colors.darkBlue}
            borderCol={Colors.borderColor}
          >
            <CustomIcon src={appleIcon} />
          </CustomButton>
        </View>

        <View style={styles.policy}>
          <Text style={styles.policyText}>
            By proceeding, i agree to all Spotrides{" "}
            <Link style={styles.textLink} href="https://example.com">
              Terms of Service{" "}
            </Link>
            and{" "}
            <Link style={styles.textLink} href="https://example.com">
              Privacy Policy
            </Link>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  description: {
    color: Colors.text,
    fontSize: 15,
    marginBottom: 10,
  },

  or: {
    alignSelf: "center",
    marginVertical: 15,
    fontSize: 18,
  },
  policy: {
    marginTop: "auto",
  },
  policyText: {
    color: Colors.text,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    paddingVertical: 20,
  },
  textLink: {
    color: Colors.darkBlue,
    fontWeight: 500,
    textDecorationLine: "underline",
  },
});
