import { extendTheme } from "@chakra-ui/react";
import fonts from "./fonts";
import styles from "./styles";
import colors from "./colors";
import breakpoints from "./breakpoints";

const theme = extendTheme({
  fonts,
  styles,
  colors,
  breakpoints,
});

export default theme;
