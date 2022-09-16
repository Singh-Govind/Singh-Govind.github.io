import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import ContactListComponent from "../Helper/ContactListComponent";
import SectionTitle from "../Helper/SectionTitle";

export default function Contact() {
  return (
    <Box mt="10rem">
      <SectionTitle title="Contact" />
      <Box mt="1rem" p="5rem 0">
        <Text textAlign="center" fontSize="4xl" marginBottom="2rem">
          Contact me on
        </Text>
        {/* <Flex
          maxW="600px"
          justifyContent="space-between"
          alignItems="center"
          margin="auto"
          border="1px solid gray"
          padding="1rem 2rem"
        >
          <Flex alignItems="center" gap="1rem">
            <FaGithub size={35} />
            <Text fontSize="1.5rem">Github</Text>
          </Flex>
          <Link
            href="https://github.com/singh-govind"
            target="_blank"
            _hover={{ textDecoration: "none" }}
          >
            <Button colorScheme={"green"}>Link to Github</Button>
          </Link>
        </Flex> */}
        <ContactListComponent
          title="E-mail"
          IconDetail={HiOutlineMail}
          linkurl="mailto:govindkmr141@gmail.com"
        />
        <ContactListComponent
          title="LinkedIn"
          linkurl="https://github.com/in/govindkmr141"
          IconDetail={FaLinkedin}
        />
        <ContactListComponent
          title="Github"
          linkurl="https://github.com/singh-govind"
          IconDetail={FaGithub}
        />
        {/* <ContactListComponent
          title="Call"
          IconDetail={BsPhone}
          linkurl="tel:7979761944"
        /> */}
      </Box>
    </Box>
  );
}
