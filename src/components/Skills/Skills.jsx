import { Box, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import Icons from "./Icons";
import { skills } from "./skillDetails";
import SectionTitle from "../Helper/SectionTitle";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import ToolsSkills from "./ToolsSkills";
import { MdEngineering } from "react-icons/md";

export default function Skills() {
  const lengthOfSkillsArr = skills.length;
  const midVal = Math.ceil(lengthOfSkillsArr / 2);
  return (
    <>
      <Box minH="100vh">
        <SectionTitle title="Skills" IconDetails={MdEngineering} />
        <Box mb="5rem">
          <Text fontSize="1.8rem" mb="1rem" textAlign="center" mt="3rem">
            <span style={{ borderBottom: "1px solid" }}>Tech Stack</span>
          </Text>
          <Grid
            mt="3rem"
            // columns={2}
            templateColumns="repeat(2, 1fr)"

            // columns={{ base: "2", lg: "3", md: "3", sm: "2" }}
          >
            {skills.map((item) => (
              <GridItem
                colSpan={
                  lengthOfSkillsArr % 2 === 1 && item.id === midVal ? 2 : 1
                }
                key={item.id}
              >
                <Icons
                  key={item.id}
                  title={item.title}
                  col={item.col}
                  iconDet={item.iconDet}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
        <SimpleGrid
          mt="3rem"
          columns={{ base: "1", lg: "2", md: "2" }}
          gap="8rem"
          align="center"
        >
          <Box>
            <Text fontSize="1.8rem" mb="2rem">
              <span style={{ borderBottom: "1px solid" }}>Frontend</span>
            </Text>
            <Box>
              <FrontendSkills />
            </Box>
          </Box>
          <Box>
            <Text fontSize="2rem" mb="2rem">
              <span style={{ borderBottom: "1px solid" }}>Backend</span>
            </Text>
            <Box>
              <BackendSkills />
            </Box>
          </Box>
        </SimpleGrid>

        <SimpleGrid justifyContent="center" mt="5rem">
          <Box>
            <Text textAlign="center" fontSize="2rem" mb="2rem">
              <span style={{ borderBottom: "1px solid" }}>Tools</span>
            </Text>
            <ToolsSkills />
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
