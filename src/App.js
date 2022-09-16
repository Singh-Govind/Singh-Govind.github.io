import { Box, Container } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import Hero2 from "./components/Hero/Hero2";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />

      <Hero2 />
      <Container
        maxW={{
          base: "container.lg",
          lg: "container.lg",
          md: "container.md",
          sm: "container.sm",
        }}
        sx={{ margin: "1rem auto" }}
      >
        <Box id="about">
          <About />
        </Box>
        <Box id="skill">
          <Skills />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
