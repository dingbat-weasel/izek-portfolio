import LeetcodeLayout from "../../LeetcodeLayout";
import ProblemDescription from "../../ProblemDescription";
import Interactive from "./Interactive";

const Problem_TwoSum = {
  title: "Two Sum",
  navigator: "two_sum",
  problem: [
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    "You can return the answer in any order.",
  ],
  examples: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0,1].",
    },
    { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    { input: "nums = [3,3], target = 6", output: "[0,1]" },
  ],
  constraints: [
    "2 <= nums.length <= 104",
    "-109 <= nums[i] <= 109",
    "-109 <= target <= 109",
  ],
};

const { title, navigator, problem, examples, constraints } = Problem_TwoSum;

function TwoSum() {
  return (
    <LeetcodeLayout>
      <Interactive />
      <ProblemDescription
        title={title}
        navigator={navigator}
        problem={problem}
        examples={examples}
        constraints={constraints}
      />
    </LeetcodeLayout>
  );
}

export default TwoSum;
