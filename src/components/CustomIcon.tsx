import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

type IconProps = {
  src: ImageSourcePropType;
};

export default function CustomIcon({ src }: IconProps) {
  return (
    <View>
      <Image source={src} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});
