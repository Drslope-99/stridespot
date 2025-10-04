import { Dimensions } from "react-native";

const { width: sw, height: sh } = Dimensions.get("window");

const SIZES = {
  // Font sizes (Xsm, Sm, Md, Lg, Xl, Xxl, 32)
  fontXsm: 10,
  fontSm: 12,
  fontMd: 14,
  fontLg: 16,
  fontXl: 20,
  fontXxl: 24,
  font32: 32,

  // Spacing (for both margins and paddings)
  spXs: 4,
  spSm: 8,
  spMd: 12,
  spLg: 16,
  spXl: 24,
  spXxl: 32,

  // Border radius
  radSm: 4,
  radMd: 8,
  radLg: 12,
  radXl: 16,

  // Icon sizes
  iconSm: 16,
  iconMd: 24,
  iconLg: 32,
  iconXl: 48,
  iconXxl: 64,

  // Screen dimensions (optional, can get dynamic with Dimensions API)
  screenWidth: sw,
  screenHeight: sh,
};

export default SIZES;
