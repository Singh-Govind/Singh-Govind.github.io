import { SimpleGrid } from "@chakra-ui/react";
import Icons from "./Icons";
import { skills } from "./skillDetails";

export default function Skills() {
  return (
    <SimpleGrid columns={{ base: "2", lg: "3", md: "3", sm: "2" }}>
      {skills.map((item) => (
        <Icons key={item.id} title={item.title} urls={item.url} />
      ))}
    </SimpleGrid>
  );
}
