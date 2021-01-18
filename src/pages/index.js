import * as React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider resetCSS>
      <Button>This is</Button>
    </ChakraProvider>
  );
};

export default IndexPage;
