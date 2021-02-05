import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import * as React from "react";
import Layout from "../components/layout";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const IndexPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const data = useStaticQuery(graphql`
    query MyQuery {
      lightmode: file(relativePath: { eq: "lightmode.jpeg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      darkmode: file(relativePath: { eq: "darkmode.jpeg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Flex mt="20%" maxwidth="70%" alignItems="center" direction="column">
        <Heading textAlign="center">CHRIS CARDOZA</Heading>
        <Text>Hi my name is Chris</Text>
        <Text>This is me in the worst shape of my life</Text>
        <Box width="40%">
          {colorMode === "light" ? (
            <Img fluid={data.lightmode.childImageSharp.fluid} />
          ) : (
            <Img fluid={data.darkmode.childImageSharp.fluid} />
          )}
        </Box>
        <Button rounded="full" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
