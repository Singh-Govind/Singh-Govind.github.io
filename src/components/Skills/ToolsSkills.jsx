import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { BiGitRepoForked } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiHeroku, SiNetlify, SiPostman, SiVercel } from "react-icons/si";
import { ImNpm } from "react-icons/im";
import { VscJson } from "react-icons/vsc";

export default function ToolsSkills() {
  return (
    <SimpleGrid
      columns={{ base: "2", lg: "4", md: "3" }}
      gap={{ base: "2rem", lg: "4rem", md: "3rem" }}
    >
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <BiGitRepoForked size="3rem" fill="orange" />
        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          Git
        </Text>
      </Flex>

      {/* 2nd */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <BsGithub size="3rem" fill={useColorModeValue("white", "black")} />
        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          Github
        </Text>
      </Flex>

      {/* 3rd */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <SiPostman size="3rem" fill={"orangered"} />
        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          Postman
        </Text>
      </Flex>

      {/* 4th */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <ImNpm size="3rem" fill={"orangered"} />
        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          NPM
        </Text>
      </Flex>

      {/* 5th */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <SiHeroku size="3rem" fill={"#3A0095"} />

        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          Heroku
        </Text>
      </Flex>

      {/* 6th */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <SiNetlify size="3rem" fill={"#89D5D8"} />

        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          Netlify
        </Text>
      </Flex>

      {/* 7th */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <VscJson size="3rem" fill={"orange"} />

        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          JSON
        </Text>
      </Flex>

      {/* 8th */}
      <Flex
        alignItems="center"
        flexDir="column"
        backgroundColor={useColorModeValue("black", "white")}
        padding="1rem 1.5rem"
        borderRadius="10px"
      >
        <SiVercel size="3rem" fill={useColorModeValue("white", "black")} />

        <Text
          fontSize="2rem"
          color={useColorModeValue("white", "black")}
          fontWeight="medium"
        >
          Vercel
        </Text>
      </Flex>
    </SimpleGrid>
  );
}
