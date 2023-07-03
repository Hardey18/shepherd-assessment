import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";

export function Feeds({ icon, fileIcon, time, description, documentName }: any) {
  return (
    <div>
      <SimpleGrid display={"flex"} alignItems={"flex-start"} p={4}>
        <Box
          background={useColorModeValue("orange.100", "orange.500")}
          p={4}
          rounded={"full"}
          marginRight={4}
        >
          {icon}
        </Box>
        <Box>
          <Text
            color={useColorModeValue("gray.500", "gray.900")}
            fontSize={{ base: "x-small", md: "sm" }}
          >
            {time}
          </Text>
          <Text fontWeight={"bold"} fontSize={{ base: "x-small", md: "sm" }}>
            {description}
          </Text>
          <Box display={"flex"} alignItems={"center"} border={"1px dashed grey"} rounded={"full"} p={2} mt={2} width={"fit-content"}>
            {fileIcon}
            <Text
              color={useColorModeValue("gray.500", "gray.900")}
              fontWeight={"bold"}
              marginLeft={2}
              fontSize={{ base: "x-small", md: "sm" }}
            >
              {documentName}
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
}
