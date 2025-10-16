import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";
import CustomSearchInput from "./CustomSearchInput";

type MapModalProps = {
  visible: boolean;
  onCloseModal: () => void;
  onChangeLocation: (value: string) => void;
};

export default function SearchLocationMapModal({
  visible,
  onCloseModal,
  onChangeLocation,
}: MapModalProps) {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {}, []);
  const [locatinText, setLocationText] = useState("");

  //   snap points for the bottom sheets in the map
  const snapPoints = useMemo(() => ["50%%", "70%"], []);

  // handle the text input
  const handleInputChange = (text: string) => {
    setLocationText(text);
    onChangeLocation(text);
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onCloseModal}
      statusBarTranslucent={true}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.mapContainer}></View>
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          onChange={handleSheetChanges}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
        >
          <BottomSheetView style={styles.footerContainer}>
            <View style={styles.searchBar}>
              <CustomSearchInput
                placeholder="type in the location keyword"
                value={locatinText}
                onChangeText={handleInputChange}
              />
            </View>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: SIZES.radLg,
    borderTopRightRadius: SIZES.radLg,
  },
  mapContainer: {
    backgroundColor: Colors.violet50,
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    padding: SIZES.spSm,
  },
  searchBar: {
    width: "90%",
    height: 50,
    alignSelf: "center",
  },
});
