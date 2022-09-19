import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import ContactListComponent from "./ContactListComponent";
import SectionTitle from "../Helper/SectionTitle";
import { GrContact } from "react-icons/gr";
import Resume from "../assets/files/Govind_Singh_resume.pdf";

export default function Contact() {
  return (
    <Box mt="10rem">
      <SectionTitle title="Contact" IconDetails={GrContact} />
      <Box mt="1rem" p="5rem 0">
        <Text textAlign="center" fontSize="4xl" marginBottom="2rem">
          Get in touch!
        </Text>
        <ContactListComponent
          title="E-mail"
          linkdesc="govindkmr141@gmail.com"
          IconDetail={HiOutlineMail}
          linkurl="mailto:govindkmr141@gmail.com"
        />
        <ContactListComponent
          title="LinkedIn"
          linkdesc="Find me on LinkedIn"
          linkurl="https://linkedin.com/in/govindkmr141"
          IconDetail={FaLinkedin}
        />
        <ContactListComponent
          title="Github"
          linkdesc="Follow on Github"
          linkurl="https://github.com/singh-govind"
          IconDetail={FaGithub}
        />
        <ContactListComponent
          title="Resume"
          linkdesc="Download Resume"
          linkurl={Resume}
          IconDetail={FaFilePdf}
        />
      </Box>
    </Box>
  );
}
