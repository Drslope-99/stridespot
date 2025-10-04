import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import NotificationItems from "../../components/NotificationItems";
import TitleText from "../../components/TitleText";
import Colors from "../../constants/colors";
import { notifications } from "../../constants/notifications";
import SIZES from "../../constants/sizes";

const categories: string[] = [
  "all",
  "delivery updates",
  "payments",
  "promotions & alerts",
];

export default function NotificationScreen() {
  const [menuActive, setMenuActive] = useState("all");
  const [notificationMessages, setNotificationMessages] = useState([
    ...notifications,
  ]);

  useEffect(() => {
    if (menuActive === "all") {
      setNotificationMessages([...notifications]);
    } else {
      const filtered = [...notifications].filter((notification) =>
        notification.category
          .toLocaleLowerCase()
          .includes(menuActive.toLowerCase())
      );
      setNotificationMessages(filtered);
    }
  }, [menuActive]);

  return (
    <View style={styles.container}>
      <View style={{ height: 60 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          style={{ height: 60 }}
        >
          {categories.map((cat) => {
            const isActive = cat === menuActive;

            return (
              <Pressable
                key={cat}
                style={[styles.menuBtn, isActive && styles.menuActive]}
              >
                <Text
                  style={[
                    styles.menuBtnText,
                    isActive && { color: Colors.purple },
                  ]}
                  numberOfLines={1}
                  onPress={() => setMenuActive(cat)}
                >
                  {cat}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <FlatList
        ListHeaderComponent={<TitleText title="Today" />}
        style={styles.listWrapper}
        data={notificationMessages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItems item={item} />}
        ListEmptyComponent={<Text>empty list</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    flexDirection: "row",
    height: 60,
    paddingVertical: SIZES.spMd,
    paddingHorizontal: SIZES.spLg,
    alignItems: "center",
    gap: 10,
  },
  menuBtn: {
    backgroundColor: Colors.backgroundLight,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  menuBtnText: {
    fontSize: 12,
    textTransform: "capitalize",
    color: Colors.text,
  },
  menuActive: {
    borderWidth: 1,
    borderColor: Colors.purple,
  },
  listWrapper: {
    paddingHorizontal: SIZES.spLg,
  },
});
