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
      <h1 className={"text-uppercase"}>a Cybersecurity Analyst!</h1>
      <h5 className={"ms-5 me-5 px-md-5 px-1 mb-3 mt-3"}>
        Cybersecurity analysts protect organizations&#39; computer systems and
        networks from cyber threats and attacks. They monitor security systems,
        detect vulnerabilities, and implement security measures to safeguard
        sensitive data and information.
        <br /> <br />
      </h5>
      <ShareBox />
      <br />
      <GoBackButton />
    </div>
  );
};

export default SEResult;
