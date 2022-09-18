import { Button, Flex, Link, Text } from "@chakra-ui/react";

export default function ContactListComponent({
  title,
  linkurl,
  IconDetail,
  linkdesc,
}) {
  return (
    <>
      <Flex
        maxW="600px"
        justifyContent="space-between"
        alignItems="center"
        margin="1rem auto"
        border="1px solid gray"
        padding="1rem 2rem"
      >
        <Flex alignItems="center" gap="1rem">
          <IconDetail size={35} />
          <Text fontSize="1.5rem">{title}</Text>
        </Flex>
        <Link
          href={linkurl}
          target="_blank"
          _hover={{ textDecoration: "none" }}
        >
          <Text
            fontSize={{ base: "0.8rem", xl: "1.2rem", lg: "1rem", md: "1rem" }}
            sx={{
              backgroundColor: "green.400",
              color: "white",
              padding: "0.5rem 1rem",
              transition: "all 0.2s ease-in-out",
              _hover: {
                textDecoration: "underline",
                backgroundColor: "green.600",
              },
            }}
          >
            {linkdesc}
          </Text>
        </Link>
      </Flex>
    </>
  );
}
