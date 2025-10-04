import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import type { Notification } from "../constants/notifications";
import SIZES from "../constants/sizes";

type Props = {
  item: Notification;
};

export default function NotificationItems({ item }: Props) {
  let category = item.category.toLowerCase();

  //   let iconName: string = "truck";
  let iconName: "truck" | "money" | "flag" = "truck";
  const iconColors: Record<"truck" | "money" | "flag", string> = {
    truck: Colors.purple,
    money: Colors.green400,
    flag: Colors.yellow400,
  };

  const iconBgColors: Record<"truck" | "money" | "flag", string> = {
    truck: Colors.violet100,
    money: Colors.green100,
    flag: Colors.yellow100,
  };

  if (category.includes("payments")) {
    iconName = "money";
  }

  if (category.includes("promotions")) {
    iconName = "flag";
  }

  if (category.includes("delivery")) {
    iconName = "truck";
  }

  return (
    <Pressable style={styles.wrapper}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: iconBgColors[iconName], borderRadius: 15 },
        ]}
      >
        <FontAwesome
          name={iconName}
          color={iconColors[iconName]}
          size={SIZES.fontLg}
          style={iconName === "truck" ? styles.flippedIcon : undefined}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.cta}>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.backgroundLight,
    paddingVertical: SIZES.spMd,
    paddingHorizontal: SIZES.spMd,
    marginVertical: SIZES.spSm,
    borderRadius: SIZES.radMd,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,

    // elevation: 1,
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    flex: 1,
    flexShrink: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: SIZES.fontMd,
    color: Colors.dark,
    fontWeight: "bold",
  },
  description: {
    fontSize: SIZES.fontMd,
    color: Colors.lightGray,
  },
  cta: {
    justifyContent: "center",
  },
  time: {
    fontSize: SIZES.fontXsm,
    color: Colors.text,
    fontWeight: 600,
  },
  flippedIcon: {
    transform: [{ scaleX: -1 }],
  },
});
