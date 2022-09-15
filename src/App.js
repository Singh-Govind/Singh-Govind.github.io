import { Box, Container } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Container
        maxW={{
          base: "container.lg",
          lg: "container.lg",
          md: "container.md",
          sm: "container.sm",
        }}
        sx={{ margin: "5rem auto" }}
      >
        <Box>
          <Hero />
        </Box>
        <Box id="skill">
          <Skills />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
