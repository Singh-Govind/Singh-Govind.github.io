import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
import { center_flex, desc_text_style, main_flex_style } from "./project.style";

export default function Project({
  desc,
  screenshot_src,
  dp_link,
  gt_link,
  project_title,
  tech_stack,
  alt_text,
}) {
  return (
    <Flex sx={main_flex_style}>
      <Box>
        <Image src={screenshot_src} alt={alt_text} />
      </Box>
      <Box sx={{ minWidth: { base: "70%", lg: "50%" } }}>
        <Heading as="h3">{project_title}</Heading>
        <Text sx={desc_text_style}>{desc}</Text>
        <Flex gap="1rem" justifyContent={center_flex}>
          {tech_stack.map((item, i) => (
            <Heading
              as="h5"
              sx={{ fontSize: "0.8rem", textTransform: "uppercase" }}
              key={i}
            >
              {item}
            </Heading>
          ))}
        </Flex>
        <Flex
          sx={{ marginTop: "1.5rem", gap: "2rem", justifyContent: center_flex }}
        >
          <Link href={dp_link} target="_blank">
            <Button sx={{ paddingInline: "2rem" }} leftIcon={<GrDeploy />}>
              Link
            </Button>
          </Link>
          <Link href={gt_link} target="_blank">
            <Button sx={{ paddingInline: "2rem" }} leftIcon={<FaGithub />}>
              Link
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}
