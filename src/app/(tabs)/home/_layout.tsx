import { Stack } from "expo-router";
import Colors from "../../../constants/colors";
import SIZES from "../../../constants/sizes";

export default function HomeScrenLayout() {
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
      <Stack.Screen name="index" options={{ title: "home" }} />
      <Stack.Screen name="sendpackage" options={{ title: "send package" }} />
    </Stack>
  );
}
