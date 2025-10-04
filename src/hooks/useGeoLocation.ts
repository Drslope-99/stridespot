import { useEffect, useState } from "react";
import { Platform } from "react-native";

import * as Device from "expo-device";

import * as Location from "expo-location";

export default function App() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getCurrentLocation() {
      try {
        setIsLoading(true);
        setErrorMessage("");
        if (Platform.OS === "android" && !Device.isDevice) {
          throw new Error(
            "Oops, this will not work on Snack in an Android Emulator. Try it on your device!"
          );
        }
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          throw new Error("Permission to access location was denied");
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("Failed to fetch location");
        }
      } finally {
        setIsLoading(false);
      }
    }

    getCurrentLocation();
  }, []);

  return { isLoading, location, errorMessage };
}
