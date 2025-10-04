import { useState } from "react";
import { StyleSheet, View } from "react-native";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
import LocationSearchInput from "../../../components/LocationSearchInput";
import PickMapAddressBtn from "../../../components/PickMapAddressBtn";
import SavedLocation from "../../../components/SavedLocation";
import Colors from "../../../constants/colors";
import SIZES from "../../../constants/sizes";
import useHideTabBar from "../../../hooks/useHideTabBar";

export default function SendPackageScreen() {
  useHideTabBar();
  const [location, setLocation] = useState({ from: "", to: "" });

  const handleSwap = () => {
    setLocation(({ from, to }) => ({ from: to, to: from }));
  };

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
        />
        <SavedLocation />
        <SavedLocation />
        <SavedLocation />
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
});
