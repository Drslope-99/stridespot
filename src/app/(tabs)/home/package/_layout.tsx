import { Stack } from "expo-router";
import Colors from "../../../../../src/constants/colors";
import SIZES from "../../../../../src/constants/sizes";

export default function PackageLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontSize: SIZES.fontLg,
          fontWeight: "light",
          color: Colors.dark,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Send a package" }} />
      <Stack.Screen
        name="packagedetails"
        options={{ title: "Delivery Details" }}
      />
    </Stack>
  );
}
