import React from "react";
import data from "../data/dsjson.json";
import { Flex } from "@chakra-ui/react";
import { BarGraph } from "react-d3-bar-graph";

//What is the top paying Data Science Jobs?

//sort for the 10 lowest salaries in usd in order
const highestEXJobs = data
  .filter((job) => job.experience_level === "EX")
  .sort((a, b) => b.salary_in_usd - a.salary_in_usd)
  .filter((_, i) => i < 10);

// console.log(highestEXJobs);

const VisualThree = () => {
  return (
    <Flex>
      <BarGraph
        width={700}
        height={500}
        yRange={700000}
        xValue="job_title"
        yValue="salary_in_usd"
        data={highestEXJobs}
        ticks={10}
        axisStyles={{
          color: "white",
          "font-size": "15px",
        }}
        xAxisSlanted={true}
        colors={["#f72585", "#b5179e", "#7209b7", "#480ca8", "#560bad", "#3a0ca3", "#3f37c9", "#4361ee", "#4cc9f0", "#3a0ca3"]}
      />
    </Flex>
  );
};
export default VisualThree;
