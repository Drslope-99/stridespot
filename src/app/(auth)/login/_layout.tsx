// import HeaderButton from "@/src/components/HeaderButton";
import { Stack, useRouter } from "expo-router";
import HeaderButton from "../../../components/HeaderButton";

export default function LoginLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerShadowVisible: false,
          headerRight: () => (
            <HeaderButton
              title="Get Started"
              onPress={() => router.replace("/signup")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="reset"
        options={{ title: "", headerShadowVisible: false }}
      />
      <Stack.Screen
        name="verify"
        options={{ title: "", headerShadowVisible: false }}
      />
      <Stack.Screen
        name="resetPassword"
        options={{ title: "", headerShadowVisible: false }}
      />
    </Stack>
  );
}
