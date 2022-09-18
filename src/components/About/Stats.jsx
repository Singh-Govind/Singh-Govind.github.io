import { Box, Flex, Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

export default function Stats() {
  return (
    <>
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

      {/* <Flex>
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
      </Flex> */}
    </>
  );
}
