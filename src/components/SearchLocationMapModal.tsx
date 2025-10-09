import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
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

  //   snap points for the bottom sheets in the map
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onCloseModal}
      statusBarTranslucent={true}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.mapContainer}>
            <View style={[styles.searchBar, { marginTop: insets.top + 10 }]}>
              <CustomSearchInput placeholder="type in the location keyword" />
            </View>
          </View>
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          onChange={handleSheetChanges}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
        >
          <BottomSheetView style={styles.footerContainer}>
            <Text>display the suggested locations</Text>
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
    padding: SIZES.spMd,
  },
  searchBar: {
    width: "90%",
    height: 50,
    alignSelf: "center",
  },
});
