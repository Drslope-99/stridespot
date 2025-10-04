import { Stack } from "expo-router";
import Colors from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontSize: SIZES.fontLg,
          fontWeight: "light",
          color: Colors.dark,
        },
        headerTitleAlign: "center",
        // headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Profile" }} />
      <Stack.Screen name="personalinfo" options={{ title: "Personal info" }} />
      <Stack.Screen name="location" options={{ title: "Add home location" }} />
      <Stack.Screen name="language" options={{ title: "Select language" }} />
    </Stack>
  );
}
