import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Hero() {
  console.log(__dirname);
  return (
    <Box>
      {/* <Container
        maxW="container.lg"
        sx={{
          margin: "5rem auto",
        }}
      > */}
      <Flex w="95%" justifyContent="space-around" gap={50}>
        <Text maxW="md">
          <Text>Hello, I am</Text>
          <Heading>Govind</Heading>
        </Text>
        <Box>
          <Image
            width={300}
            src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/11/Facebook-Profile-Images-65.jpg"
          />
        </Box>
      </Flex>
      {/* </Container> */}
    </Box>
  );
}
