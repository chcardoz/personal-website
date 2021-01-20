import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default Layout;
