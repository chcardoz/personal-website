import { Box } from "@chakra-ui/react";
import * as React from "react";
import Layout from "../components/layout";
import { Hero } from "../components/Hero";

const IndexPage = () => {
  return (
    <Layout>
      <Box mt={{ base: "5rem", md: "11rem" }} mx="auto" maxWidth="80%">
        <Hero />
      </Box>
    </Layout>
  );
};

export default IndexPage;
