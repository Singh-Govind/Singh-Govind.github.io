import { Box, Flex, Heading, Icon, useColorModeValue } from "@chakra-ui/react";

export default function Icons({ col, title, iconDet }) {
  const widhts = {
    base: "100px",
    lg: "150px",
    md: "130px",
    sm: "80px",
  };

  const fontsizes = {
    base: "18px",
    lg: "2xl",
    md: "xl",
    sm: "md",
  };

  return (
    <Box
      width={widhts}
      sx={{
        textAlign: "center",
        margin: "1rem auto",
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: useColorModeValue("black", "white"),
          padding: {
            base: "1rem",
            xl: "1.5rem",
            lg: "1.5rem 2rem",
            md: "1.5rem 1rem",
          },
          borderRadius: "50%",
        }}
      >
        <Icon
          as={iconDet}
          h={{ base: "4rem", xl: "6rem", lg: "6rem", md: "5rem" }}
          w={{ base: "4rem", xl: "6rem", lg: "6rem", md: "5rem" }}
          color={col}
        />
      </Flex>
      <Heading as="h4" fontSize={fontsizes} mt={3}>
        {title}
      </Heading>
    </Box>
  );
}
