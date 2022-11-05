import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import SectionTitle from "../Helper/SectionTitle";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

export default function Stats() {
  return (
    <>
      <Box minHeight="100vh" marginTop="5rem">
        <SectionTitle
          title="Statistics"
          IconDetails={HiOutlinePresentationChartBar}
        />
        <Box marginBottom="5rem" mt="3rem">
          <Text textAlign="center" fontSize="1.8rem" mb="2rem">
            <span
              style={{
                borderBottom: "1px solid",
              }}
            >
              Stats
            </span>
          </Text>
          <SimpleGrid
            columns={{ base: "2", xl: "4", lg: "4", md: "3", sm: "2" }}
            justifyItems="center"
            gap="3rem"
            width="80%"
            margin="auto"
          >
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  fontSize: "2rem",
                  border: "10px solid #48BB78",
                  padding: "2.2rem 1rem",
                  borderRadius: "50%",
                }}
              >
                1200+
              </Box>
              <Box>
                <Text sx={{ fontSize: "1.3rem" }}>Hours</Text>
                <Text>of coding</Text>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  fontSize: "2rem",
                  border: "10px solid #48BB78",
                  padding: "2.2rem 1.5rem",
                  borderRadius: "50%",
                }}
              >
                100+
              </Box>
              <Box>
                <Text sx={{ fontSize: "1.3rem" }}>Hours</Text>
                <Text>of Soft Skills</Text>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  fontSize: "2rem",
                  border: "10px solid #48BB78",
                  padding: "2.2rem 2.5rem",
                  borderRadius: "50%",
                }}
              >
                5+
              </Box>
              <Box>
                <Text sx={{ fontSize: "1.3rem" }}>Projects</Text>
                <Text>completed</Text>
              </Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  fontSize: "2rem",
                  border: "10px solid #48BB78",
                  padding: "2.2rem 1.5rem",
                  borderRadius: "50%",
                }}
              >
                210+
              </Box>
              <Box>
                <Text sx={{ fontSize: "1.3rem" }}>Git</Text>
                <Text>commits</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>

        <Box>
          <Flex
            flexDir="column"
            flexWrap="wrap"
            justifyContent="center"
            gap="2rem"
          >
            <Image src="https://github-readme-stats.vercel.app/api?username=singh-govind&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=true" />
            <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=singh-govind&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=true&layout=compact" />
            <Image src="https://github-readme-streak-stats.herokuapp.com/?user=singh-govind&theme=tokyonight&hide_border=false" />
          </Flex>
        </Box>

        <Flex
          sx={{
            margin: "auto",
            marginTop: "5rem",
            marginBottom: "5rem",
            justifyContent: "center",
            width: { base: "90%", lg: "100%", md: "100%" },
          }}
        >
          <GitHubCalendar
            username="singh-govind"
            children={<ReactTooltip html />}
          />
        </Flex>
      </Box>
    </>
  );
}
