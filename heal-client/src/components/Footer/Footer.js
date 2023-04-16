/*eslint-disable*/
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          Powered by <b style={{ color: "purple" }}>JECS</b>
        </Text>
        <Link
          color="blue.400"
          href="https://samwelngwale.netlify.app"
          target="_blank"
        >
          , Samxtu
        </Link>
        {" & "}
        <Link
          color="blue.400"
          href="https://https://github.com/ValorbeamTech"
          target="_blank"
        >
          BIL
        </Link>
      </Text>
    </Flex>
  );
}
