import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import CustomButton from "../../../components/CustomButton";
import CustomIcon from "../../../components/CustomIcon";
import CustomPasswordInput from "../../../components/CustomPasswordInput";
import CustomPhoneInput from "../../../components/CustomPhoneInput";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
import TitleText from "../../../components/TitleText";
import Colors from "../../../constants/colors";
import { useAuth } from "../../../providers/AuthContext";
const googleIcon = require("../../../../assets/images/googlelogo.png");
const appleIcon = require("../../../../assets/images/applelogo.png");

const LoginScreen = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const [password, setPassword] = useState("");
  const [phoneValid, setPhoneValid] = useState(false);

  const { login } = useAuth();
  const router = useRouter();

  const handlePhoneChange = (number: string) => {
    setPhoneInput(number);
  };

  const showToast = () => {
    Toast.show({
      type: "error",
      text1: "Login failed",
      text2: "Invalid login credentials!",
      text1Style: {
        fontSize: 16,
        fontWeight: "bold",
      },
      text2Style: {
        fontSize: 12,
        flexWrap: "wrap",
      },

      position: "top",
      visibilityTime: 2000,
    });
  };

  const handleLogin = async () => {
    try {
      if (!phoneInput || !password || !phoneValid) {
        showToast();
      } else {
        await login(); // update context + AsyncStorage
        router.replace("/(tabs)/home");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <KeyboardAvoidingWrapper>
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <TitleText title="Welcome to Spotride!" />
          <Text style={styles.description}>
            Please enter your phone number to continue
          </Text>
          <CustomPhoneInput
            onPhoneChange={handlePhoneChange}
            value={phoneInput}
            onValidityChange={setPhoneValid}
          />

          <CustomPasswordInput
            placeholder={`Enter Password`}
            value={password}
            onChangeText={setPassword}
          />
          <Link href={"/login/reset"} style={styles.forgotLink} push>
            Forgot password?
          </Link>
          <CustomButton
            title="Log in"
            bgColor={Colors.purple}
            color={Colors.white}
            onPress={handleLogin}
          />
        </View>

        <Text style={styles.or}>Or</Text>

        <View style={styles.section}>
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
          <Text style={styles.policyText} numberOfLines={2}>
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
      </ScrollView>
    </KeyboardAvoidingWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  section: {},

  description: {
    color: Colors.text,
    fontSize: 15,
    marginBottom: 5,
  },

  forgotLink: {
    marginBlock: 10,
    textDecorationLine: "underline",
  },

  or: {
    alignSelf: "center",
    marginVertical: 10,
    fontSize: 18,
  },
  policy: {
    marginTop: "auto",
  },
  policyText: {
    color: Colors.text,
    textAlign: "center",
    fontSize: 12,
    lineHeight: 20,
    paddingVertical: 20,
  },
  textLink: {
    color: Colors.darkBlue,
    fontWeight: 500,
    textDecorationLine: "underline",
  },
});
