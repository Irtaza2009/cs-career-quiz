import React from "react";
import GoBackButton from "@/components/ResultInstance/GoBackButton";
import ShareBox from "@/components/ResultInstance/ShareBox";

/**
 * Renders the result for the allrounder result
 */
const JackResult = () => {
  return (
    <div className={"pt-5 text-center"}>
      <h4 className={"m3-5"}>You are...</h4>
      <h1 className={"text-uppercase"}>Jack of all trades!</h1>
      <ShareBox />
      <br />
      <GoBackButton />
    </div>
  );
};

export default JackResult;
