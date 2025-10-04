import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import Colors from "../../constants/colors";
import { defaultTabStyle } from "../../constants/navigation";
import SIZES from "../../constants/sizes";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          fontSize: SIZES.fontLg,
          fontWeight: "light",
          color: Colors.dark,
        },
        headerStyle: {
          borderBottomWidth: 2,
          borderBottomColor: Colors.backgroundLight,
        },
        tabBarStyle: defaultTabStyle,
        tabBarLabelStyle: {
          fontSize: SIZES.fontSm,
        },
        tabBarActiveTintColor: Colors.purple,
        tabBarInactiveTintColor: Colors.lightGray,
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="cube" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="notification"
        options={{
          title: "Notifications",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="notifications" size={24} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
