import React from "react";
import data from "../data/dsjson.json";
import { Flex } from "@chakra-ui/react";
import { BarGraph } from "react-d3-bar-graph";

//What is the top paying Data Science Jobs?

//sort for the 10 lowest salaries in usd in order
const lowestJobs = data
  .filter(
    (job) => job.experience_level === "EN" && job.company_location === "US"
  )
  .sort((a, b) => a.salary_in_usd - b.salary_in_usd)
  .filter((_, i) => i < 10);

console.log(lowestJobs);

const VisualTwo = () => {
  return (
    <Flex>
      <BarGraph
        width={700}
        height={500}
        yRange={100000}
        xValue="job_title"
        yValue="salary_in_usd"
        data={lowestJobs}
        ticks={10}
        axisStyles={{
          color: "white",
          "font-size": "15px",
        }}
        xAxisSlanted={true}
        colors={["#f94144", "#f8961e", "#f8961e", "#f9844a", "#f8961e", "#90be6d", "#43aa8b", "#4d908e", "#577590", "#277da1", "#5a5e82", "#4f5a6e", "#4a566d", "#4a566d"]}
      />
    </Flex>
  );
};
export default VisualTwo;
