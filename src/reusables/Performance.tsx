import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { IoMdSquare } from "react-icons/io";

export const Performance = ({ text, percent, color }: any) => {
  return (
    <div>
      <Box
        color={useColorModeValue("gray.500", "gray.900")}
        display={"flex"}
        justifyContent={"space-between"}
        marginBottom={2}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IoMdSquare color={color} />
          <Text fontSize="xs" ml={1}>
            {text}
          </Text>
        </Box>
        <Text fontSize="xs" fontWeight={"bold"}>
          {percent}
        </Text>
      </Box>
    </div>
  );
};
