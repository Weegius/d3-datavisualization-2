import React from "react";
import data from "../data/dsjson.json";
import { BarGraph } from "react-d3-bar-graph";
import { Flex } from "@chakra-ui/react";

//What is the top paying Data Science Jobs?

const topJobs = data
  .sort((a, b) => b.salary_in_usd - a.salary_in_usd)
  .filter((_, i) => i < 10);


const VisualOne = () => {
  return (
    <Flex>
      <BarGraph
        width={700}
        height={500}
        yRange={600000}
        xValue="job_title"
        yValue="salary_in_usd"
        data={topJobs}
        ticks={10}
        colors={["#132a13", "#31572c", "#4f772d", "#90a955", "#ecf39e", "#2c4925", "#324f26", "#496b36", "#58873e", "#6a9e50"]}
        axisStyles={{
          color: "white",
          "font-size": "15px",
        }}
        xAxisSlanted={true}
      />
    </Flex>
  );
};
export default VisualOne;
