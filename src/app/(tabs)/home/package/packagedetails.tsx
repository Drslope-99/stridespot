import SIZES from "@/src/constants/sizes";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import LocationSearchInput from "../../../../components/LocationSearchInput";
import Colors from "../../../../constants/colors";

export default function PackageDetailScreen() {
  const { from, to } = useLocalSearchParams<{ from: string; to: string }>();
  console.log(from, to);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailsMap}>
        <LocationSearchInput pickup={from} dropoff={to} disabled={true} />
        <View style={styles.mapBox}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: SIZES.spLg,
  },
  detailsMap: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
    padding: SIZES.spSm,
    borderRadius: SIZES.radXl,
    gap: 10,
  },
  mapBox: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.borderColor,
    borderRadius: 12,
  },
});
