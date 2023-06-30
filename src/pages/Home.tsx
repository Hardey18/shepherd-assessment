import React from "react";
import { Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { BsCloudLightningRainFill } from "react-icons/bs";
import { CircleIcon } from "../reusables/CircleIcon";
import { FirstSection } from "../components/FirstSection";
import { SecondSection } from "../components/SecondSection";

export function Home() {
  return (
    <div>
      <Stack spacing={3}>
        <Heading as="h2" size="md">
          Hi Liam, Welcome back!
        </Heading>
        <Text
          fontSize="md"
          display="flex"
          alignItems="center"
          color={useColorModeValue("gray.500", "gray.900")}
        >
          <BsCloudLightningRainFill />
          <CircleIcon boxSize={2} marginLeft="3" marginRight="3" />
          Tuesday, July 21
          <CircleIcon boxSize={2} marginLeft="3" marginRight="3" />
          13:00
        </Text>
      </Stack>

      <FirstSection />

      <SecondSection />
    </div>
  );
}
