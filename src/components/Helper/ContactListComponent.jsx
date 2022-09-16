import { Button, Flex, Link, Text } from "@chakra-ui/react";

export default function ContactListComponent({ title, linkurl, IconDetail }) {
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
          <Button colorScheme={"green"}>Link to {title}</Button>
        </Link>
      </Flex>
    </>
  );
}
