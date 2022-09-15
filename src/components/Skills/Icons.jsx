import { Box, Heading, Image } from "@chakra-ui/react";

export default function Icons({ urls, title }) {
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
      <Image
        sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        src={urls}
      />
      <Heading as="h4" fontSize={fontsizes} mt={3}>
        {title}
      </Heading>
    </Box>
  );
}
