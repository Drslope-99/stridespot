import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { defaultTabStyle } from "../constants/navigation";

export default function useHideTabBar() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const parent =
      navigation.getParent()?.getParent?.() || navigation.getParent();

    if (!parent) return;

    parent.setOptions({
      tabBarStyle: { ...defaultTabStyle, display: "none" },
    });

    return () => {
      parent.setOptions({
        tabBarStyle: { ...defaultTabStyle, display: "flex" },
      });
    };
  }, [navigation]);
}
