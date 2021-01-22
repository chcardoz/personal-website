import { Box, Heading } from "@chakra-ui/react";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Box w="100%" h="200px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
      <Heading>Hey this is my website</Heading>
    </Layout>
  );
};

export default IndexPage;
