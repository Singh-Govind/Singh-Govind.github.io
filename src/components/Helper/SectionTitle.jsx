import { Flex } from "@chakra-ui/react";

export default function SectionTitle({ title }) {
  return (
    <Flex
      justifyContent={{ base: "center", lg: "flex-start", md: "flex-start" }}
    >
      <span
        style={{
          display: "inline-block",
          marginLeft: { base: "30%", xl: "auto", lg: "left", md: "left" },
          marginTop: "2rem",
          fontSize: "2rem",
          borderBottom: "5px solid",
          textAlign: { base: "center", xl: "left", lg: "left", md: "left" },
        }}
      >
        {title}
      </span>
    </Flex>
  );
}
