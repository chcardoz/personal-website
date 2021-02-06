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
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { TypeWriter } from "../components/Typewriter";

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

  const responsiveFontSize = {
    base: "2rem",
    md: "2rem",
    lg: "3rem",
    xl: "5rem",
  };
  return (
    <Layout>
      <Box mt="11rem" mx="auto" maxWidth="80%">
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justify="space-around"
        >
          <Box width="40%">
            {colorMode === "light" ? (
              <Img fluid={data.lightmode.childImageSharp.fluid} />
            ) : (
              <Img fluid={data.darkmode.childImageSharp.fluid} />
            )}
          </Box>
          <Flex mt={{ base: 5, md: 0 }} direction="column" alignItems="center">
            <Heading fontSize={responsiveFontSize}>CHRIS</Heading>
            <Heading fontSize={responsiveFontSize}>CARDOZA</Heading>
            <Text>Hi my name is Chris</Text>
            <Flex>
              <Text mr={1}>I am </Text>
              <TypeWriter
                words={["an Artist", "a Programmer", "a Physicist"]}
              />
            </Flex>

            <Button rounded="full" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
        <Flex justify="space-around" mt="15rem" mb="1rem">
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
