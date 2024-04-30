import React from "react";
import Link from "next/link";

interface ResultScreenProps {
  seScore: number;
  aiScore: number;
  dsScore: number;
  wdScore: number;
  csaScore: number;
}

/**
 * Renders a button that takes the user to the result page
 */
const ResultLinkButton: React.FC<ResultScreenProps> = ({
  seScore,
  aiScore,
  dsScore,
  wdScore,
  csaScore,
}) => {
  if (seScore > Math.max(wdScore, aiScore, dsScore, csaScore)) {
    return (
      <Link href={"/se"}>
        <button className={"backButton"}>Result</button>
      </Link>
    );
  } else if (wdScore > Math.max(aiScore, dsScore, seScore, csaScore)) {
    return (
      <Link href={"/wd"}>
        <button className={"backButton"}>Result</button>
      </Link>
    );
  } else if (aiScore > Math.max(dsScore, wdScore, seScore, csaScore)) {
    return (
      <Link href={"/ai"}>
        <button className={"backButton"}>Result</button>
      </Link>
    );
  } else if (dsScore > Math.max(wdScore, aiScore, seScore, csaScore)) {
    return (
      <Link href={"/ds"}>
        <button className={"backButton"}>Result</button>
      </Link>
    );
  } else if (csaScore > Math.max(wdScore, aiScore, seScore, dsScore)) {
    return (
      <Link href={"/csa"}>
        <button className={"backButton"}>Result</button>
      </Link>
    );
  } else {
    return (
      <Link href={"/jack"}>
        <button className={"backButton"}>Result</button>
      </Link>
    );
  }
};

export default ResultLinkButton;
