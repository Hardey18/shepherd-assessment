import { Box, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

export function SecondSection() {
  return (
    <div>
      <Grid
        h={{ base: "600px", md: "300px" }}
        templateRows={{ base: "repeat(8, 1fr)", md: "repeat(2, 1fr)" }}
        templateColumns="repeat(5, 1fr)"
        gap={4}
        mt={8}
      >
        <GridItem
          rowSpan={{ base: 4, md: 2 }}
          colSpan={{ base: 5, md: 3 }}
          bg="#fff"
          border={"1px solid #e6e6e6"}
          borderRadius={16}
        >
          Third
        </GridItem>
        <GridItem
          rowSpan={{ base: 4, md: 2 }}
          colSpan={{ base: 5, md: 2 }}
          bg="#fff"
          border={"1px solid #e6e6e6"}
          borderRadius={16}
        >
          Fourth
        </GridItem>
      </Grid>
    </div>
  );
}