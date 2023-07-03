import { SimpleGrid, Text } from "@chakra-ui/react";
import { BiSolidStopwatch } from "react-icons/bi";

import { Calendar } from "../components/Calendar";

export function Schedule() {
  return (
    <div>
      <SimpleGrid
        p={4}
        display={"flex"}
        alignItems={"center"}
        borderBottom={"1px solid #e6e6e6"}
      >
        <BiSolidStopwatch color={"#4d4dff"} />
        <Text
          fontSize={{ base: "x-small", md: "sm" }}
          fontWeight={"bold"}
          marginLeft={2}
        >
          Schedule
        </Text>
      </SimpleGrid>

      <Calendar />
    </div>
  );
}
