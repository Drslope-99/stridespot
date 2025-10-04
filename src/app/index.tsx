// app/index.tsx
import { Redirect } from "expo-router";

import { useAuth } from "../providers/AuthContext";

export default function Index() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) return null;

  if (isLoggedIn) {
    return <Redirect href="/(tabs)/home" />;
  }

  return <Redirect href="/(auth)" />;
}
