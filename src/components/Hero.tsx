import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Button,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
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
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justify="space-around"
      m="0 auto"
    >
      <Box width="40%">
        {colorMode === "light" ? (
          <Img fluid={data.lightmode.childImageSharp.fluid} />
        ) : (
          <Img fluid={data.darkmode.childImageSharp.fluid} />
        )}
      </Box>
      <Flex
        maxW="40%"
        mt={{ base: 5, md: 0 }}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Box>
          <Button size="lg" rounded="full" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
        <Heading fontSize={responsiveFontSize}>CHRIS</Heading>
        <Heading fontSize={responsiveFontSize}>CARDOZA</Heading>

        <Text mt="2rem">
          Hello there! Looks like you found my personal website. You can click
          the links above to go to read my thoughts, look at my projects and
          read a little bit more about me
        </Text>
      </Flex>
    </Flex>
  );
};
