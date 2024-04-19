import React from "react";
import GoBackButton from "@/components/ResultInstance/GoBackButton";
import ShareBox from "@/components/ResultInstance/ShareBox";

/**
 * Renders the result for the python result
 */
const SEResult = () => {
  return (
    <div className={"pt-5 text-center"}>
      <h4 className={"m3-5"}>You are best suited to become...</h4>
      <h1 className={"text-uppercase"}>a Software Engineer!</h1>
      <h5 className={"ms-5 me-5 px-md-5 px-1 mb-3 mt-3"}>
        Software engineers design, develop, test, and maintain software systems
        and applications. They work on various platforms and programming
        languages to create innovative solutions.
        <br /> <br />
      </h5>
      <ShareBox />
      <br />
      <GoBackButton />
    </div>
  );
};

export default SEResult;
