import React from "react";
import data from "../data/dsjson.json";


//What is the top paying Data Science Jobs?

const lowestJobs = data
  .sort((a, b) => a.salary_in_usd - b.salary_in_usd)
  .slice(0, 10);

console.log(lowestJobs)




const VisualTwo = () => {
  return (
    <div>
      <h1>VisualTwo</h1>
    </div>
  );
}
export default VisualTwo;