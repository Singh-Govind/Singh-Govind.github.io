import { Container } from "@chakra-ui/react";
import Project from "./Project";
import { projectList } from "./projectLIst";

export default function Projects() {
  return (
    <>
      {projectList.map((item) => (
        <Project key={item.id} {...item} />
      ))}
    </>
  );
}
