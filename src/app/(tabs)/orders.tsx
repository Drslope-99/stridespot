import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import CustomSearchInput from "../../components/CustomSearchInput";
import KeyboardAvoidingWrapper from "../../components/KeyboardAvoidingWrapper";
import Colors from "../../constants/colors";
import SIZES from "../../constants/sizes";

export default function OrdersScreen() {
  const [searchInput, setSearchInput] = useState("");
  const translateX = useSharedValue<number>(0);

  const handlePress = (v: number) => {
    translateX.value = v;
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withSpring(translateX.value * SIZES.screenWidth) },
    ],
  }));

  return (
    <KeyboardAvoidingWrapper>
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <View style={styles.tabMenu}>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => handlePress(0)}
            >
              <Text style={styles.tabButtonText}>Ongoing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => handlePress(0.5)}
            >
              <Text style={styles.tabButtonText}>Completed</Text>
            </TouchableOpacity>
          </View>
          <Animated.View style={[styles.tabSlider, animatedStyle]} />
        </View>
        <View style={styles.contentContainer}>
          <CustomSearchInput
            placeholder="Search"
            value={searchInput}
            onChangeText={setSearchInput}
          />
          <EmptyOder />
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
}

function EmptyOder() {
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.emptyPackage}>
        <Feather name="package" size={SIZES.iconXxl} color={Colors.violet400} />
      </View>
      <Text style={styles.emptyText}>You have no deliveries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  tabContainer: {
    paddingHorizontal: SIZES.spLg,
    borderBottomWidth: 2,
    borderBottomColor: Colors.backgroundLight,
  },
  tabMenu: { flexDirection: "row" },
  tabButton: {
    flex: 0.5,
    paddingVertical: SIZES.spSm,
    alignItems: "center",
  },
  tabButtonText: {
    color: Colors.text,
    fontWeight: 500,
  },
  tabSlider: {
    height: 2,
    width: SIZES.screenWidth * 0.4,
    backgroundColor: Colors.violet300,
  },
  contentContainer: {
    paddingHorizontal: SIZES.spMd,
  },

  emptyContainer: {
    paddingVertical: 16,
  },
  emptyPackage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.violet50,
  },
  emptyText: {
    textAlign: "center",
    marginVertical: SIZES.spMd,
    fontSize: SIZES.fontLg,
    color: Colors.text,
  },
});
