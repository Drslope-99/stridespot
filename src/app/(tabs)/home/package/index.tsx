import { useRouter } from "expo-router";
import { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomButton from "../../../../components/CustomButton";
import KeyboardAvoidingWrapper from "../../../../components/KeyboardAvoidingWrapper";
import LocationSearchInput from "../../../../components/LocationSearchInput";
import PickMapAddressBtn from "../../../../components/PickMapAddressBtn";
import SavedLocation from "../../../../components/SavedLocation";
import SearchLocationMapModal from "../../../../components/SearchLocationMapModal";
import Colors from "../../../../constants/colors";
import SIZES from "../../../../constants/sizes";
import useHideTabBar from "../../../../hooks/useHideTabBar";

export default function SendPackageScreen() {
  useHideTabBar(); // hook to hide the tab bar on certain screens
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [location, setLocation] = useState({ from: "", to: "" });
  const [showModal, setShowModal] = useState(false);

  const handleSwap = () => {
    setLocation(({ from, to }) => ({ from: to, to: from }));
  };

  const handleContinue = () => {
    Keyboard.dismiss();
    if (location.from.trim() && location.to.trim()) {
      router.push({
        pathname: "/(tabs)/home/package/packagedetails",
        params: {
          from: location.from,
          to: location.to,
        },
      });
    } else {
      return;
    }
  };

  const isButtonEnabled =
    location.from.trim().length > 0 && location.to.trim().length > 0;

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <LocationSearchInput
          pickup={location.from}
          dropoff={location.to}
          onChangePickup={(text) => setLocation({ ...location, from: text })}
          onChangeDropoff={(text) => setLocation({ ...location, to: text })}
          onSwapLocation={handleSwap}
        />
        <PickMapAddressBtn
          title="pick address via map"
          background={Colors.backgroundLight}
          borderCol={Colors.borderColor}
          onPress={() => setShowModal(true)}
        />
        <SavedLocation />
        <SavedLocation />
        <SavedLocation />

        <View style={[styles.footer, { paddingBottom: insets.bottom + 10 }]}>
          <CustomButton
            title="Continue"
            bgColor={Colors.purple}
            color={Colors.white}
            onPress={handleContinue}
            disabled={!isButtonEnabled}
          />
        </View>
        <SearchLocationMapModal
          visible={showModal}
          onCloseModal={() => setShowModal(false)}
        />
      </View>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: SIZES.spMd,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: SIZES.spMd,

    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
