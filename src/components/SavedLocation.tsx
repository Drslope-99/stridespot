import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";

export default function SavedLocation() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[{ backgroundColor: Colors.violet50 }, styles.iconBox]}>
        <Ionicons
          name="location-sharp"
          size={SIZES.iconMd}
          color={Colors.violet400}
        />
      </View>
      <View style={styles.locationDetails}>
        <Text style={styles.locationName}>Osong-Ama estate</Text>
        <Text
          style={styles.locationAddress}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {/* 56, Edet Akpan avenue uyo, 104567 */}
          No 11 Raji abayomi street mafoluku oshodi isolo
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 5,
    marginBlock: 5,
  },
  iconBox: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  locationDetails: {
    flex: 1,
    minWidth: 0,
  },
  locationName: {
    fontWeight: 600,
    color: Colors.darkBlue,
  },
  locationAddress: {
    color: Colors.text,
    fontSize: SIZES.fontMd,
    flexShrink: 1,
  },
});
