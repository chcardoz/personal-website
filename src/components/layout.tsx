import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../theme";

const Layout: React.FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Layout;
