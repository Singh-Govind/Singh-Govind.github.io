import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Container,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import resume from "../assets/files/Govind_Singh_resume.pdf";
import Logo from "./Logo";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        px={4}
        position="fixed"
        width="100%"
        zIndex="999"
        borderBottom={`1px solid ${useColorModeValue("#c9c7c7", "#545151")}`}
      >
        <Container
          maxW={{
            lg: "container.lg",
            md: "container.md",
            sm: "container.sm",
          }}
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Link href="/">
                <Logo />
              </Link>
            </Box>

            <Flex alignItems={"center"}>
              <Flex
                alignItems={"center"}
                gap="3rem"
                mr="2rem"
                display={{
                  base: "none",
                  xl: "flex",
                  lg: "flex",
                  sm: "none",
                  md: "none",
                }}
              >
                <Text fontSize="lg">
                  <Link href="#about">About</Link>
                </Text>
                <Text fontSize="lg">
                  <Link href="#skill">Skills</Link>
                </Text>
                <Text fontSize="lg">
                  <Link href="#projects">Projects</Link>
                </Text>
                <Text fontSize="lg">
                  <Link href="#stats">Stats</Link>
                </Text>
                <Text fontSize="lg">
                  <Link href="#contact">Contact</Link>
                </Text>
                <Link textDecoration="none" href={resume}>
                  <Box
                    sx={{
                      padding: "0.4rem 1rem",
                      cursor: "pointer",
                      bg: "#48BB78",
                      color: "white",
                      fontWeight: "medium",
                      transition: "0.2s all ease-in-out",
                      _hover: {
                        bg: "#29d973",
                      },
                    }}
                  >
                    RESUME
                  </Box>
                </Link>
              </Flex>

              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>

                <Flex
                  display={{ lg: "none", sm: "flex", md: "flex" }}
                  sx={{ width: "100%" }}
                >
                  <Menu>
                    <MenuButton
                      as={Button}
                      variant={"link"}
                      size={"280px"}
                      cursor={"pointer"}
                      minW={0}
                    >
                      <HamburgerIcon w={7} h={10} />
                    </MenuButton>
                    <MenuList alignItems={"center"}>
                      <Flex
                        flexDirection="column"
                        gap="2rem"
                        alignItems="center"
                        padding="1rem"
                      >
                        <Text fontSize="lg">
                          <Link href="#about">About</Link>
                        </Text>

                        <Text fontSize="lg">
                          <Link href="#skill">Skills</Link>
                        </Text>
                        <Text fontSize="lg">
                          <Link href="#projects">Projects</Link>
                        </Text>
                        <Text fontSize="lg">
                          <Link href="#stats">Stats</Link>
                        </Text>
                        <Text fontSize="lg">
                          <Link href="#contact">Contact</Link>
                        </Text>
                      </Flex>
                    </MenuList>
                  </Menu>
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
