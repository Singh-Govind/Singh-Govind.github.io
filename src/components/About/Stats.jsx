import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

export default function Stats() {
  return (
    <>
      <Box marginBottom="8rem">
        <Flex
          sx={{
            margin: "auto",
            marginTop: "-4rem",
            marginBottom: "8rem",
            justifyContent: "center",
            width: { base: "90%", lg: "100%", md: "100%" },
          }}
        >
          <GitHubCalendar
            username="singh-govind"
            children={<ReactTooltip html />}
          />
        </Flex>

        <Box>
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
                  border: "10px solid blue",
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
                  border: "10px solid blue",
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
                  border: "10px solid blue",
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
                  border: "10px solid blue",
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
      </Box>
    </>
  );
}
