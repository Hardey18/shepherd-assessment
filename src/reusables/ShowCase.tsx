import {
  Box,
  Flex,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
export function ShowCase(props: any) {
  const { children, ...rest } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("brand.400", "white");
  return (
    <Flex direction="column" align="center" {...rest}>
      <Box w="100%">{children}</Box>
    </Flex>
  );
}
