import {
  Box,
  Card,
  Heading,
} from "@chakra-ui/react";
import { useRef } from "react";
import BarChart from "../reusables/BarChart";

import { ShowCase } from "../reusables/ShowCase";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "../utils/chartData";

export function Chart() {
  const windowSize: any = useRef([window.innerWidth, window.innerHeight]);
  const windowsWidth = windowSize.current[0];
  return (
    <div>
      <ShowCase>
        <Card
          mx="auto"
          mt={{ base: "18px", md: "50px" }}
          align="center"
          direction="column"
          w={{ base: "300px", md: "400px" }}
          background={"transparent"}
          boxShadow={"none"}
        >
          <Heading
            as="h2"
            size="sm"
            alignSelf={"start"}
          >
            Quiz Performance
          </Heading>
          <Box h="240px" mt="auto">
            <BarChart
              chartData={barChartDataDailyTraffic}
              chartOptions={barChartOptionsDailyTraffic}
              width={windowsWidth < 790 ? "110%" : "200%"}
            />
          </Box>
        </Card>
      </ShowCase>
    </div>
  );
}
