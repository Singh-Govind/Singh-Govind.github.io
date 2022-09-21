import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaUserSecret } from "react-icons/fa";
import Govind from "../assets/images/Govind.jpg";
import SectionTitle from "../Helper/SectionTitle";

export default function About() {
  return (
    <>
      <SectionTitle title="About Me" IconDetails={FaUserSecret} />
      <Flex
        flexDirection={{
          base: "column",
          md: "row",
          xl: "row",
          lg: "row",
          sm: "column",
        }}
        fontFamily="sans-serif"
        sx={{
          fontFamily: "san-serif",
          minH: { base: "90vh", xl: "70vh", lg: "70vh", md: "100vh" },
          //   alignItems: "center",
          marginTop: { base: "4rem", xl: "8rem", lg: "8rem", md: "5rem" },
        }}
      >
        <Box
          sx={{
            order: { base: "2", xl: "1", lg: "1", md: "1", sm: "2" },
            textAlign: { base: "center", xl: "left", lg: "left", md: "left" },
          }}
        >
          <Heading
            as="h1"
            fontWeight={"normal"}
            sx={{
              marginTop: { base: "1rem", lg: "auto", xl: "auto", md: "auto" },
            }}
            fontSize={{
              base: "2rem",
              lg: "2.5rem",
              xl: "2.5rem",
              md: "2.5rem",
            }}
          >
            Govind Kumar Singh
          </Heading>
          <Heading
            as="h3"
            sx={{
              fontSize: "xl",
              fontWeight: "normal",
              marginBlock: "0.6rem 2rem",
            }}
          >
            Full Stack Web Developer
          </Heading>
          <Text
            width={{
              base: "100%",
              md: "80%",
              xl: "70%",
              lg: "70%",
              sm: "100%",
            }}
            fontSize={"lg"}
          >
            Full-Stack Web Developer with the ability to learn and collaborate
            in rapidly changing environments and compositions. Worked through
            1000+ hours of Bootcamp structure learning JavaScript, Node.Js,
            React.Js, MongoDB, Express, HTML5, and CSS3.
          </Text>
          <Text
            sx={{
              margin: "2.5rem auto 1.5rem auto",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            <span style={{ borderBottom: "2px solid" }}>Let's Connect</span>
          </Text>
          <Flex
            sx={{
              gap: "2rem",
              justifyContent: {
                base: "center",
                xl: "flex-start",
                lg: "flex-start",
                md: "flex-start",
              },
            }}
          >
            <Link href="https://github.com/singh-govind" target="_blank">
              <Flex gap="8px" alignItems="center">
                <FaGithub size={25} /> <Text fontSize="1.2rem">Github</Text>
              </Flex>
            </Link>
            <Link
              href="https://www.linkedin.com/in/govindkmr141/"
              target="_blank"
            >
              <Flex gap="8px" alignItems="center">
                <FaLinkedin size={25} /> <Text fontSize="1.2rem">LinkedIn</Text>
              </Flex>
            </Link>
          </Flex>
        </Box>
        <Box sx={{ order: { base: "1", xl: "2", lg: "2", md: "2", sm: "1" } }}>
          <Image
            src={Govind}
            sx={{
              borderRadius: "15px",
              filter: "grayscale(70%)",
              margin: "auto",
              width: {
                base: "60%",
                xl: "100%",
                lg: "100%",
                sm: "30%",
                md: "100%",
              },
            }}
          />
        </Box>
      </Flex>
    </>
  );
}
