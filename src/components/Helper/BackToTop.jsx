import { Box, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

export default function BackToTop() {
  return (
    <Link style={{ textDecoration: "none" }} href="#top">
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#48BB78",
          padding: "1rem",
          borderTopRightRadius: "50px",
          borderTopLeftRadius: "50px",
          zIndex: "1000",
        }}
        position="fixed"
        bottom={10}
        right={5}
      >
        <Heading pt={2} fontSize="1rem" color="white">
          Top
        </Heading>
      </Box>
    </Link>
  );
}
