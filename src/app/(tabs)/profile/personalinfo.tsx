import { ScrollView, StyleSheet, View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import CustomEmailInput from "../../../components/CustomEmailInput";
import CustomTextInput from "../../../components/CustomTextInput";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
import Colors from "../../../constants/colors";
import SIZES from "../../../constants/sizes";
import useHideTabBar from "../../../hooks/useHideTabBar";

export default function PersonalInfoScreen() {
  useHideTabBar();

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <CustomTextInput label="First Name" value="John" disabled={true} />
          <CustomTextInput label="Last Name" value="Doe" disabled={true} />
          <CustomTextInput
            label="Phone Number"
            value="09078993060"
            disabled={true}
          />
          <CustomEmailInput
            value="realjohndoe@gmail.com"
            onChangeText={() => {}}
            disabled={true}
          />
          <CustomButton
            title="Continue"
            bgColor={Colors.purple}
            color={Colors.white}
            disabled={true}
          />
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
  content: {
    flexGrow: 1,
    paddingVertical: SIZES.spLg,
    paddingHorizontal: SIZES.spLg,
    paddingBottom: 80,
  },
});
