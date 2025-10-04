import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../../../components/CustomButton";
import CustomSearchInput from "../../../components/CustomSearchInput";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";
import Colors from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

export default function HomeLocationScreen() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <View style={styles.locationBar}>
          <CustomSearchInput
            placeholder="Type in your address"
            value={searchInput}
            onChangeText={setSearchInput}
          />
          <TouchableOpacity style={styles.locate}>
            <Ionicons name="locate" size={24} color={Colors.purple} />
            <Text style={styles.locateText}>Pick address over the map</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <CustomButton
            title="Continue"
            bgColor={Colors.purple}
            color={Colors.white}
          />
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  locationBar: {
    paddingHorizontal: SIZES.spMd,
  },
  btnContainer: {
    paddingHorizontal: SIZES.spMd,
    marginVertical: "auto",
  },
  locate: {
    marginBlock: SIZES.spMd,
    flexDirection: "row",
    alignItems: "center",
    gap: SIZES.spSm,
  },
  locateText: {
    fontWeight: 500,
  },
});
