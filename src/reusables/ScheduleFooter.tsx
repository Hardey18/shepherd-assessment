import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Events } from "./Events";

export function ScheduleFooter() {
  return (
    <div>
      <Box mt={2}>
        <Text
          fontSize={{ base: "x-small", md: "sm" }}
          color={useColorModeValue("gray.500", "gray.900")}
          pl={7}
        >
          Upcoming Events
        </Text>
        <Events />
      </Box>
    </div>
  );
}
