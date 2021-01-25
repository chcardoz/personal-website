import { extendTheme } from "@chakra-ui/react";
import fonts from "./font-config";
import styles from "./styles";
import colors from "./colors";
import breakpoints from "./breakpoints";
import config from "./config";

const theme = extendTheme({
  fonts,
  styles,
  colors,
  breakpoints,
  config,
});

export default theme;
