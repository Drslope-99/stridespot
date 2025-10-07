import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

/**
 * Hook that returns the keyboard height (in px).
 * - Returns 0 when the keyboard is closed.
 * - Works on both iOS and Android.
 */
export default function useKeyboardHeight() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardHeight(e.endCoordinates.height + 10); // +10 for small buffer
    });

    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return keyboardHeight;
}
