import { Stack, useRouter } from "expo-router";
import HeaderButton from "../../../components/HeaderButton";

export default function SignUpLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          title: "",
          headerRight: () => (
            <HeaderButton
              title="Login"
              onPress={() => router.replace("/login")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="verify"
        options={{ title: "", headerShadowVisible: false }}
      />
      <Stack.Screen
        name="register"
        options={{ title: "", headerShadowVisible: false }}
      />
    </Stack>
  );
}
