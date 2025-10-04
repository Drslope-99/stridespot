import Ionicons from "@expo/vector-icons/Ionicons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ReactNode } from "react";
import { Modal, Pressable, View } from "react-native";
import Colors from "../constants/colors";
import SIZES from "../constants/sizes";

type ModalProps = {
  show: boolean;
  height?: number;
  onClose: () => void;
  children?: ReactNode;
};

export default function CustomModal({
  show,
  onClose,
  height,
  children,
}: ModalProps) {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={onClose}
    >
      <View
        style={{
          backgroundColor: Colors.modalBackground,
          width: SIZES.screenWidth,
          height: SIZES.screenHeight,
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "relative",
            width: SIZES.screenWidth * 0.94,
            height: height || SIZES.screenHeight * 0.36,
            backgroundColor: Colors.white,
            marginBottom: tabBarHeight / 2,
            borderRadius: SIZES.radXl,
            padding: SIZES.spXl,
          }}
        >
          <Pressable
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 40,
              height: 40,
              backgroundColor: Colors.white,
              borderRadius: 20,
              position: "absolute",
              right: 0,
              top: -50,
            }}
            onPress={onClose}
          >
            <Ionicons name="close" size={24} />
          </Pressable>
          {children}
        </View>
      </View>
    </Modal>
  );
}
