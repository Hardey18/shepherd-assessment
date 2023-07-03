// Chakra imports
import {
  Box,
  Flex,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
// Custom components
// import Card from "components/card/Card.js";
// import BarChart from "components/charts/BarChart";
import React from "react";
export function ShowCase(props: any) {
  const { children, ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("brand.400", "white");
  return (
    <Flex direction="column" align="center" {...rest}>
      <Box w="100%">{children}</Box>
      {/* <Button w="max-content" mt="16px" size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button> */}
    </Flex>
  );
}
