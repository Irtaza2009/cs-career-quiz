import React from "react";
import GoBackButton from "@/components/ResultInstance/GoBackButton";
import ShareBox from "@/components/ResultInstance/ShareBox";

/**
 * Renders the result for the html result
 */
const AIResult = () => {
  return (
    <div className={"pt-5 text-center"}>
      <h4 className={"m3-5"}>You are best suited to become...</h4>
      <h1 className={"text-uppercase"}>an AI/ML Engineer!</h1>
      <h5 className={"ms-5 me-5 px-md-5 px-1 mb-3 mt-3"}>
        AI/ML engineers develop intelligent systems and algorithms that can
        learn from data and make predictions or decisions. They work on projects
        such as natural language processing, computer vision, and recommendation
        systems. <br /> <br />
      </h5>
      <ShareBox />
      <br />
      <GoBackButton />
    </div>
  );
};

export default AIResult;
