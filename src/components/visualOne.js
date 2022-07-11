import React from "react";
import data from '../data/dsjson.json';


//What is the top paying Data Science Jobs?

const topJobs = data
  .sort((a, b) => b.salary_in_usd - a.salary_in_usd)
  .slice(0, 10);

console.log(topJobs)


const VisualOne = () => {
  return (
    <div>
      <h1>VisualOne</h1>
    </div>
  );
}
export default VisualOne;