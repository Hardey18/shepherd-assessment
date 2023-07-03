import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { PiCards } from "react-icons/pi";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { Performance } from "./Performance";
import Carousel from "./Carousel";

export function WeeklySummary() {
  return (
    <div>
      <Stack spacing={0}>
        <Heading as="h2" size="sm" display={"flex"} alignItems={"center"} p={4}>
          <Stack pr={2}>
            <PiCards color={useColorModeValue("gray.500", "gray.900")} />
          </Stack>
          Weekly Summary
        </Heading>
        <SimpleGrid columns={2} px={4} py={2}>
          <Box>
            <Heading
              color={useColorModeValue("gray.500", "gray.900")}
              as="h2"
              size="sm"
            >
              Cards studied
            </Heading>
            <Box display={"flex"} alignItems={"flex-end"}>
              <Heading as="h2" size="lg" mr={2}>
                0
              </Heading>
              <Text
                color={useColorModeValue("gray.500", "gray.900")}
                fontSize={{ base: "x-small", md: "sm" }}
                mb={1}
                fontWeight={"bold"}
              >
                cards
              </Text>
            </Box>
          </Box>
          <Box>
            <Heading
              color={useColorModeValue("gray.500", "gray.900")}
              as="h2"
              size="sm"
            >
              Time Studied
            </Heading>
            <Box display={"flex"}>
              <Box display={"flex"} alignItems={"flex-end"} mr={2}>
                <Heading as="h2" size="lg" mr={2}>
                  05
                </Heading>
                <Text
                  color={useColorModeValue("gray.500", "gray.900")}
                  fontSize={{ base: "x-small", md: "sm" }}
                  mb={1}
                  fontWeight={"bold"}
                >
                  hrs
                </Text>
              </Box>
              <Box display={"flex"} alignItems={"flex-end"}>
                <Heading as="h2" size="lg" mr={2}>
                  30
                </Heading>
                <Text
                  color={useColorModeValue("gray.500", "gray.900")}
                  fontSize={{ base: "x-small", md: "sm" }}
                  mb={1}
                  fontWeight={"bold"}
                >
                  mins
                </Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} borderTop={"1px solid #e6e6e6"}>
          <Box py={6} px={4} borderRight={"1px solid #e6e6e6"}>
            <Text
              color={useColorModeValue("gray.500", "gray.900")}
              fontSize={{ base: "x-small", md: "sm" }}
              mb={2}
              fontWeight={"bold"}
            >
              Flashcard Performance
            </Text>
            <Performance text="Got it right" color="green" percent="40%" />
            <Performance text="Didn't remember" color="orange" percent="40%" />
            <Performance text="Got it wrong" color="red" percent="20%" />
          </Box>
          <Carousel />
        </SimpleGrid>
        <SimpleGrid
          bg="#e6e6e6"
          p={4}
          borderBottomRadius={16}
          display={"flex"}
          alignItems={"center"}
        >
          <AiTwotoneThunderbolt color={"#ff9900"} />
          <Text
            color={useColorModeValue("gray.500", "gray.900")}
            fontSize={{ base: "x-small", md: "sm" }}
            ml={2}
            mr={2}
            fontWeight={"bold"}
          >
            Current streak:
          </Text>
          <Text fontSize={{ base: "x-small", md: "sm" }} fontWeight={"bold"}>
            20 days
          </Text>
        </SimpleGrid>
      </Stack>
    </div>
  );
}
