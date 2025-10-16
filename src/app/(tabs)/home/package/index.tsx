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

  const [location, setLocation] = useState({ pickup: "", dropoff: "" });
  const [activeField, setActiveField] = useState<"pickup" | "dropoff" | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);

  const handleSwap = () => {
    if (!location.pickup || !location.dropoff) return;

    setLocation(({ pickup, dropoff }) => ({
      pickup: dropoff,
      dropoff: pickup,
    }));
  };

  const handleContinue = () => {
    Keyboard.dismiss();
    if (location.pickup.trim() && location.dropoff.trim()) {
      router.push({
        pathname: "/(tabs)/home/package/packagedetails",
        params: {
          from: location.pickup,
          to: location.dropoff,
        },
      });
    } else {
      return;
    }
  };

  const isButtonEnabled =
    (location.pickup?.trim()?.length ?? 0) > 0 &&
    (location.dropoff?.trim()?.length ?? 0) > 0;

  const handleLocationChangeFromMap = (value: string) => {
    if (!activeField) return;

    setLocation((prev) => ({
      ...prev,
      [activeField]: value, // dynamically update the focused field
    }));
  };

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <LocationSearchInput
          pickup={location.pickup}
          dropoff={location.dropoff}
          onChangePickup={(text) =>
            setLocation((prev) => ({ ...prev, pickup: text }))
          }
          onChangeDropoff={(text) =>
            setLocation((prev) => ({ ...prev, dropoff: text }))
          }
          onFocusField={(field) => {
            setActiveField(field);
            // setShowModal(true);
          }}
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
        {showModal && (
          <SearchLocationMapModal
            visible={showModal}
            onCloseModal={() => setShowModal(false)}
            onChangeLocation={handleLocationChangeFromMap}
          />
        )}
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
