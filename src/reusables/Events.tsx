import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

export function Events() {
  const eventsData = [
    {
      id: 1,
      title: "Chemistry Lesson with Leslie Peters",
      before: "03:30pm",
      after: "04:30pm",
      border: "4px solid orange",
      background: useColorModeValue("orange.50", "orange.300"),
    },
    {
      id: 1,
      title: "Physics Lesson with Yvonne Nelson",
      before: "05:30pm",
      after: "06:30pm",
      border: "4px solid green",
      background: useColorModeValue("green.50", "green.300"),
    },
  ];
  return (
    <div>
      {eventsData.map((event) => (
        <Box
          borderLeft={event.border}
          pl={6}
          py={2}
          background={event.background}
          mt={2}
          mb={4}
        >
          <Text fontSize={{ base: "sm", md: "medium" }} fontWeight={"bold"}>
            {event.title}
          </Text>
          <Text
            mt={1}
            fontSize={{ base: "x-small", md: "sm" }}
            color={useColorModeValue("gray.500", "gray.900")}
            display={"flex"}
            alignItems={"center"}
          >
            {event.before}{" "}
            <AiOutlineArrowRight
              style={{ marginLeft: "6px", marginRight: "6px" }}
            />{" "}
            {event.after}
          </Text>
          <Box display={"flex"} mt={2}>
            <Box background={"#fff"} width={"fit-content"} rounded={"full"}>
              <RxAvatar size={25} />
            </Box>
            <Box
              background={"#fff"}
              width={"fit-content"}
              rounded={"full"}
              marginLeft={-2}
            >
              <RxAvatar size={25} />
            </Box>
          </Box>
        </Box>
      ))}
    </div>
  );
}
