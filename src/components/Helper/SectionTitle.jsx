import { Flex } from "@chakra-ui/react";
import { BsBookFill } from "react-icons/bs";

export default function SectionTitle({ title, IconDetails = BsBookFill }) {
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
        <Flex alignItems="center" gap="0.5rem" textTransform="uppercase">
          <IconDetails size="2rem" />
          {title}
        </Flex>
      </span>
    </Flex>
  );
}
