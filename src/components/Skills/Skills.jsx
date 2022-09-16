import { SimpleGrid } from "@chakra-ui/react";
import Icons from "./Icons";
import { skills } from "./skillDetails";
import SectionTitle from "../Helper/SectionTitle";

export default function Skills() {
  return (
    <>
      {/* <SectionTitle title="Skills" /> */}
      <SimpleGrid columns={{ base: "2", lg: "3", md: "3", sm: "2" }}>
        {skills.map((item) => (
          <Icons key={item.id} title={item.title} urls={item.url} />
        ))}
      </SimpleGrid>
    </>
  );
}
