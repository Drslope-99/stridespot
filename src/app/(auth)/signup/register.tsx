import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import CustomEmailInput from "../../../components/CustomEmailInput";
import CustomPasswordInput from "../../../components/CustomPasswordInput";
import CustomTextInput from "../../../components/CustomTextInput";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
import TitleText from "../../../components/TitleText";
import Colors from "../../../constants/colors";

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <View style={styles.header}>
              <TitleText title="We're almost done!" />
              <Text style={styles.description}>
                Fill in your details to set up your account and access all
                features. It’s quick and secure.
              </Text>
            </View>
            <CustomTextInput
              label="First Name"
              value={firstName}
              onChangeText={setFirstName}
              placeholder="first name"
            />
            <CustomTextInput
              label="Last Name"
              value={lastName}
              onChangeText={setLastName}
              placeholder="last name"
            />
            <CustomEmailInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email Address"
            />
            <CustomPasswordInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
            />
            <CustomPasswordInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm password"
            />
            <CustomButton
              title="Register"
              bgColor={Colors.purple}
              color={Colors.white}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80,
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
});
