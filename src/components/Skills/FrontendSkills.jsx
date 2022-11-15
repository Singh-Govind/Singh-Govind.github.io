import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  SiChakraui,
  SiHtml5,
  SiJavascript,
  SiReactrouter,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function FrontendSkills() {
  return (
    <>
      <SimpleGrid columns={{ base: "2", xl: "1", lg: "1", md: "1" }} gap="1rem">
        <Flex
          boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
          _hover={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
          }}
          transition="0.3s all ease-in-out"
          paddingInline="1rem"
          paddingBlock="0.5rem"
          marginBottom="1rem"
          justifyContent={{
            base: "center",
            lg: "flex-start",
            md: "flex-start",
          }}
        >
          <Flex gap="1rem" alignItems={"center"}>
            <Box backgroundColor="black" padding="0.2rem" borderRadius="50%">
              {/* // icon here */}
              <FaReact
                fill="#39C1D7"
                // color="#39C1D7"
                size="1.8rem"
              />
            </Box>
            <Text fontSize="1.5rem">React</Text>
          </Flex>
        </Flex>

        {/* NexJS element */}
        <Flex
          boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
          _hover={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
          }}
          transition="0.3s all ease-in-out"
          paddingInline="1rem"
          paddingBlock="0.5rem"
          marginBottom="1rem"
          justifyContent={{
            base: "center",
            lg: "flex-start",
            md: "flex-start",
          }}
        >
          <Flex gap="1rem" alignItems={"center"}>
            <Box backgroundColor="black" padding="0.2rem" borderRadius="50%">
              {/* // icon here */}
              <TbBrandNextjs
                fill="white"
                // color="#39C1D7"
                size="1.8rem"
              />
            </Box>
            <Text fontSize="1.5rem">NextJS</Text>
          </Flex>
        </Flex>

        {/* 2nd component */}
        <Flex
          boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
          _hover={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
          }}
          transition="0.3s all ease-in-out"
          paddingInline="1rem"
          paddingBlock="0.5rem"
          marginBottom="1rem"
          justifyContent={{
            base: "center",
            lg: "flex-start",
            md: "flex-start",
          }}
        >
          <Flex gap="1rem" alignItems={"center"}>
            <Box
              backgroundColor="black"
              // padding="0.2rem"
              borderRadius="50%"
            >
              {/* // icon here */}
              <SiJavascript
                fill="yellow"
                // color="#39C1D7"
                size="1.8rem"
              />
            </Box>
            <Text fontSize="1.5rem">JavaScript</Text>
          </Flex>
        </Flex>
        {/* 3rd component */}
        <Flex
          boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
          _hover={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
          }}
          transition="0.3s all ease-in-out"
          paddingInline="1rem"
          paddingBlock="0.5rem"
          marginBottom="1rem"
          justifyContent={{
            base: "center",
            lg: "flex-start",
            md: "flex-start",
          }}
        >
          <Flex gap="1rem" alignItems={"center"}>
            <Box
            // backgroundColor="black"
            // padding="0.2rem"
            // borderRadius="50%"
            >
              {/* // icon here */}
              <IoLogoCss3
                fill="#2652E2"
                // color="#39C1D7"
                size="2rem"
              />
            </Box>
            <Text fontSize="1.5rem">CSS3</Text>
          </Flex>
        </Flex>

        {/* 4th component */}
        <Flex
          boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
          _hover={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
          }}
          transition="0.3s all ease-in-out"
          paddingInline="1rem"
          paddingBlock="0.5rem"
          marginBottom="1rem"
          justifyContent={{
            base: "center",
            lg: "flex-start",
            md: "flex-start",
          }}
        >
          <Flex gap="1rem" alignItems={"center"}>
            <Box
            // backgroundColor="black"
            // padding="0.2rem"
            // borderRadius="50%"
            >
              {/* // icon here */}
              <SiHtml5
                fill="#E96228"
                // color="#39C1D7"
                size="2rem"
              />
            </Box>
            <Text fontSize="1.5rem">HTML5</Text>
          </Flex>
        </Flex>

        {/* 5th component */}
        <Flex
          boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
          _hover={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
          }}
          transition="0.3s all ease-in-out"
          paddingInline="1rem"
          paddingBlock="0.5rem"
          marginBottom="1rem"
          justifyContent={{
            base: "center",
            lg: "flex-start",
            md: "flex-start",
          }}
        >
          <Flex gap="1rem" alignItems={"center"}>
            <Box
            // backgroundColor="black"
            // padding="0.2rem"
            // borderRadius="50%"
            >
              {/* // icon here */}
              <SiRedux
                fill="#7248B6"
                // color="#39C1D7"
                size="2rem"
              />
            </Box>
            <Text fontSize="1.5rem">Redux</Text>
          </Flex>
        </Flex>

        {/* 6th component */}
        <Flex
          boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
          _hover={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
          }}
          transition="0.3s all ease-in-out"
          paddingInline="1rem"
          paddingBlock="0.5rem"
          marginBottom="1rem"
          justifyContent={{
            base: "center",
            lg: "flex-start",
            md: "flex-start",
          }}
        >
          <Flex gap="1rem" alignItems={"center"}>
            <Box
            // backgroundColor="black"
            // padding="0.2rem"
            // borderRadius="50%"
            >
              {/* // icon here */}
              <SiChakraui
                fill="#5ECACA"
                // color="#39C1D7"
                size="2rem"
              />
            </Box>
            <Text fontSize="1.5rem">Chakra UI</Text>
          </Flex>
        </Flex>

        {/* 7th component */}
        <Flex
          boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
          _hover={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
          }}
          transition="0.3s all ease-in-out"
          paddingInline="1rem"
          paddingBlock="0.5rem"
          marginBottom="1rem"
          justifyContent={{
            base: "center",
            lg: "flex-start",
            md: "flex-start",
          }}
        >
          <Flex gap="1rem" alignItems={"center"}>
            <Box
            // backgroundColor="black"
            // padding="0.2rem"
            // borderRadius="50%"
            >
              {/* // icon here */}
              <SiTypescript
                fill="#2F74C0"
                // color="#39C1D7"
                size="2rem"
              />
            </Box>
            <Text fontSize="1.5rem">TypeScript</Text>
          </Flex>
        </Flex>

        {/* 6th component */}
        <Flex
          boxShadow="rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"
          _hover={{
            boxShadow:
              "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
          }}
          transition="0.3s all ease-in-out"
          paddingInline="1rem"
          paddingBlock="0.5rem"
          marginBottom="1rem"
          justifyContent={{
            base: "center",
            lg: "flex-start",
            md: "flex-start",
          }}
        >
          <Flex gap="1rem" alignItems={"center"}>
            <Box
            // backgroundColor="black"
            // padding="0.2rem"
            // borderRadius="50%"
            >
              {/* // icon here */}
              <SiReactrouter
                fill="#7248B6"
                // color="#39C1D7"
                size="2rem"
              />
            </Box>
            <Text fontSize="1.5rem">React Router</Text>
          </Flex>
        </Flex>
      </SimpleGrid>
    </>
  );
}
