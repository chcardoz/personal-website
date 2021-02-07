import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import * as React from "react";
import Layout from "../components/layout";
import { Hero } from "../components/Hero";

const IndexPage = () => {
  return (
    <Layout>
      <Box mt={{ base: "5rem", md: "11rem" }} mx="auto" maxWidth="80%">
        <Hero />
        <Flex justify="center" mt="15rem" mb="1rem">
          <Text>
            Made with ☕ and ❤️ in Indianapolis using
            <Link mx={2} href="https://www.gatsbyjs.com/">
              Gatsby
            </Link>
            and
            <Link mx={2} mrhref="https://chakra-ui.com//">
              Chakra UI
            </Link>
          </Text>
        </Flex>
      </Box>
    </Layout>
  );
};

export default IndexPage;
