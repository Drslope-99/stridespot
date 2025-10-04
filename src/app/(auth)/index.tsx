import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../../constants/colors";

const screenWidth = Dimensions.get("window").width;

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/delivery.png")}
        style={{ width: screenWidth, height: 400 }}
      />
      <View style={styles.contentBox}>
        <Text style={styles.titleText}>Welcome to Spotride</Text>
        <Text style={styles.description}>
          Send multiple items to different location in one seamless booking.
          Watch your packgae journey from pickup to delivery
        </Text>
        <View style={styles.buttonWrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.register,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.buttonText}>Get started</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.login,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contentBox: {
    width: "100%",
    padding: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 600,
    color: "#101840",
  },
  description: {
    color: "#696f8c",
    fontSize: 15,
    paddingVertical: 5,
    lineHeight: 20,
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
  },
  register: {
    flex: 7,
    backgroundColor: Colors.purple,
    alignItems: "center",
    borderRadius: 100,
    padding: 15,
  },
  login: {
    flex: 3,
    backgroundColor: Colors.purple,
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  buttonPressed: {
    transform: [{ scale: 0.97 }],
  },
});
