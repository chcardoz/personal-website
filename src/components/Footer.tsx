import { Flex, Text, Link } from "@chakra-ui/react";
import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
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
  );
};
