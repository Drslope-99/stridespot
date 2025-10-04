import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import LangIndicatior from "../../../components/LangIndicatior";
import LineSeperator from "../../../components/LineSeperator";
import ProfileItem from "../../../components/ProfileItem";
import ProfileSection from "../../../components/ProfileSection";
import Colors from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

export default function LanguageScreen() {
  return (
    <View style={styles.container}>
      <ProfileSection>
        <ProfileItem iconName="globe" title="Language 1">
          <LangIndicatior />
        </ProfileItem>
        <LineSeperator margin={SIZES.spLg} />
        <ProfileItem iconName="globe" title="Language 2">
          <LangIndicatior bgColor={Colors.purple} />
        </ProfileItem>
        <LineSeperator margin={SIZES.spLg} />
        <ProfileItem iconName="globe" title="Language 3">
          <LangIndicatior />
        </ProfileItem>
        <LineSeperator margin={SIZES.spLg} />
        <ProfileItem iconName="globe" title="Language 4">
          <LangIndicatior />
        </ProfileItem>
      </ProfileSection>
      <CustomButton
        title="Continue"
        bgColor={Colors.purple}
        color={Colors.white}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.spLg,
    backgroundColor: Colors.white,
  },
});
