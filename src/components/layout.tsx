import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "../theme";
import { Fonts } from "../theme/Fonts";

const Layout: React.FC = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

export default Layout;
