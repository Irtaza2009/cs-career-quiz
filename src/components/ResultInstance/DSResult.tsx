import React from "react";
import GoBackButton from "@/components/ResultInstance/GoBackButton";
import ShareBox from "@/components/ResultInstance/ShareBox";

/**
 * Renders the result for the css result
 */
const DSResult = () => {
  return (
    <div className={"pt-5 text-center"}>
      <h4 className={"m3-5"}>You are best suited to become...</h4>
      <h1 className={"text-uppercase"}>a Data Scientist!</h1>
      <h5 className={"ms-5 me-5 px-md-5 px-1 mb-3 mt-3"}>
        Data scientists analyze and interpret complex data to extract valuable
        insights and patterns. They use statistical techniques, machine learning
        algorithms, and data visualization tools to solve business problems and
        make data-driven decisions.
        <br />
        <br />
      </h5>
      <ShareBox />
      <br />
      <GoBackButton />
    </div>
  );
};

export default DSResult;
