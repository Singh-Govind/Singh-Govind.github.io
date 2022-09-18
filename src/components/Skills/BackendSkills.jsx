import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { FaNode } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiMonzo } from "react-icons/si";

export default function BackendSkills() {
  return (
    <>
      <SimpleGrid
        columns={{ base: "2", xl: "1", lg: "1", md: "1" }}
        gap={"1rem"}
      >
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
            <Box backgroundColor="white" padding="0.2rem" borderRadius="50%">
              {/* // icon here */}
              <SiMongodb
                fill="#001E2B"
                // color="#39C1D7"
                size="1.8rem"
              />
            </Box>
            <Text fontSize="1.5rem">MongoDB</Text>
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
            <Box backgroundColor="white" padding="0.2rem" borderRadius="50%">
              {/* // icon here */}
              <SiExpress
                fill="#001E2B"
                // color="#39C1D7"
                size="1.8rem"
              />
            </Box>
            <Text fontSize="1.5rem">ExpressJS</Text>
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
            <Box backgroundColor="white" padding="0.2rem" borderRadius="50%">
              {/* // icon here */}
              <SiFirebase
                fill="#FFA50E"
                // color="#39C1D7"
                size="1.8rem"
              />
            </Box>
            <Text fontSize="1.5rem">Firebase</Text>
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
            <Box backgroundColor="white" padding="0.2rem" borderRadius="50%">
              {/* // icon here */}
              <FaNode
                fill="#629957"
                // color="#39C1D7"
                size="1.8rem"
              />
            </Box>
            <Text fontSize="1.5rem">NodeJS</Text>
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
            <Box backgroundColor="white" padding="0.2rem" borderRadius="50%">
              {/* // icon here */}
              <SiMonzo
                fill="#629957"
                // color="#39C1D7"
                size="1.8rem"
              />
            </Box>
            <Text fontSize="1.5rem">Mongoose</Text>
          </Flex>
        </Flex>
      </SimpleGrid>
    </>
  );
}
