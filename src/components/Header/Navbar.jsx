import { ReactNode } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Container,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "./Logo";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Container maxW={"xxl"}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Logo />
            </Box>

            <Flex alignItems={"center"} gap={10}>
              <Stack
                direction={"row"}
                spacing={7}
                alignItems="space-between"
                fontSize="xl"
              >
                <Text>About</Text>
                <Text>
                  <a href="#skill">Skills</a>
                </Text>
                <Text>
                  <a href="#projects">Projects</a>
                </Text>
                <Text>Contact</Text>
              </Stack>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
