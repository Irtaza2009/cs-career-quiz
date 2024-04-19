import React from "react";
import GoBackButton from "@/components/ResultInstance/GoBackButton";
import ShareBox from "@/components/ResultInstance/ShareBox";

/**
 * Renders the result for the javascript result
 */
const WDResult = () => {
  return (
    <div className={"pt-5 text-center"}>
      <h4 className={"m3-5"}>You are best suited to become...</h4>
      <h1 className={"text-uppercase"}>a Web Developer!</h1>
      <h5 className={"ms-5 me-5 px-md-5 px-1 mb-3 mt-3"}>
        Web developers create and maintain websites, combining technical skills
        with creative design to build user-friendly and visually appealing web
        applications.
        <br /> <br />
      </h5>
      <ShareBox />
      <br />
      <GoBackButton />
    </div>
  );
};

export default WDResult;
