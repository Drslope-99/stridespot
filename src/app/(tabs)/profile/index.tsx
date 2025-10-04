import Ionicons from "@expo/vector-icons/Ionicons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ConfirmAction from "../../../components/ConfirmAction";
import CustomModal from "../../../components/CustomModal";
import LineSeperator from "../../../components/LineSeperator";
import ProfileItem from "../../../components/ProfileItem";
import ProfileSection from "../../../components/ProfileSection";
import Colors from "../../../constants/colors";
import SIZES from "../../../constants/sizes";
import { useAuth } from "../../../providers/AuthContext";

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState<"logout" | "delete" | null>(
    null
  );
  const tabBarHeight = useBottomTabBarHeight();
  const router = useRouter();

  const { logout } = useAuth();

  const handleLogoutPress = () => {
    setModalAction("logout");
    setModalVisible(true);
  };

  const handleDeletePress = () => {
    setModalAction("delete");
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalAction(null);
  };

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)/login");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: tabBarHeight, // controls the inner content
      }}
    >
      <View style={styles.profile}>
        <TouchableOpacity style={styles.profileImageContainer}>
          <Ionicons name="person" size={32} color={Colors.purple} />
          <Ionicons
            name="add-circle"
            size={SIZES.fontXl}
            color={Colors.purple}
            style={styles.iconCircle}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <ProfileSection>
        <ProfileItem
          onPress={() => router.push("/profile/personalinfo")}
          iconName="person"
          iconColor={Colors.purple}
          title="Personal information"
        />
        <LineSeperator color={Colors.borderColor} margin={SIZES.spXl} />
        <ProfileItem
          iconName="lock-closed"
          iconColor={Colors.dark}
          title="Login and security"
        />
      </ProfileSection>

      <ProfileSection>
        <ProfileItem
          onPress={() => router.push("/profile/location")}
          iconName="home"
          iconColor={Colors.green400}
          title="Add home location"
        />
      </ProfileSection>

      <ProfileSection>
        <ProfileItem
          iconName="card"
          iconColor={Colors.yellow400}
          title="Payments method"
        />
        <LineSeperator color={Colors.borderColor} margin={SIZES.spXl} />
        <ProfileItem
          onPress={() => router.push("/profile/language")}
          iconName="globe"
          title="Language (english)"
        />
        <LineSeperator color={Colors.borderColor} margin={SIZES.spXl} />
        <ProfileItem iconName="document" title="Terms and conditions" />
      </ProfileSection>

      <ProfileSection>
        <ProfileItem
          onPress={handleLogoutPress}
          iconName="exit-outline"
          iconColor={Colors.red400}
          title="Log out"
          titleStyle={{ color: Colors.red400, fontWeight: 500 }}
        />

        <LineSeperator color={Colors.borderColor} margin={SIZES.spXl} />
        <ProfileItem
          onPress={handleDeletePress}
          iconName="trash"
          iconColor={Colors.red400}
          title="Delete account"
          titleStyle={{ color: Colors.red400, fontWeight: 500 }}
        />
      </ProfileSection>
      <CustomModal show={modalVisible} onClose={closeModal}>
        {modalAction === "logout" && (
          <ConfirmAction
            iconName="exit-outline"
            iconColor={Colors.red400}
            iconBgColor={Colors.red100}
            onConfirm={handleLogout}
            message="Are you sure you want to log out?"
            buttonText="Yes, log me out"
          />
        )}
        {modalAction === "delete" && (
          <ConfirmAction
            iconName="trash"
            iconColor={Colors.red400}
            iconBgColor={Colors.red100}
            onConfirm={handleLogout}
            message="Are you sure you want to delete your account?"
            buttonText="Yes, delete my account"
          />
        )}
      </CustomModal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.spLg,
    paddingTop: SIZES.spXl,
    backgroundColor: Colors.white,
  },
  profile: {
    alignItems: "center",
  },
  profileImageContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    backgroundColor: Colors.violet100,
    borderRadius: 35,
  },
  profileName: {
    fontSize: 18,
    marginVertical: 10,
    color: Colors.dark,
    fontWeight: 500,
  },
  iconCircle: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});
