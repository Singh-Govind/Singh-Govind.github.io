import { Box, Container, Heading, Text, useColorMode } from "@chakra-ui/react";
import SectionTitle from "../Helper/SectionTitle";
import Project from "./Project";
import { projectList } from "./projectLIst";

export default function Projects() {
  const { colorMode } = useColorMode();
  return (
    <>
      {/* <Box
        sx={{
          marginTop: "5rem",
        }}
      >
        <Text
          sx={
            colorMode === "light"
              ? { borderBottom: "1px solid lightgray" }
              : { borderBottom: "1px solid gray" }
          }
          textAlign={"center"}
          fontSize={{ base: "5xl", lg: "6xl", md: "5xl", sm: "4xl" }}
        >
          Projects
        </Text> */}
      <Box marginBlock="5rem 3rem">
        <SectionTitle title="Projects" />
        {projectList.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </Box>
    </>
  );
}
