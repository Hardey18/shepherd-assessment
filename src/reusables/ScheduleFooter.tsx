import { Box, Text, useColorModeValue } from "@chakra-ui/react";
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
