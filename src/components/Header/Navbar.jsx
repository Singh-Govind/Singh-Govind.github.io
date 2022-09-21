import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Container,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "./Logo";

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.900")} px={4}>
        <Container
          maxW={{
            lg: "container.lg",
            md: "container.md",
            sm: "container.sm",
          }}
          // sx={{ margin: "1rem auto" }}
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
                gap="4rem"
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
                      // rounded={"full"}
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
