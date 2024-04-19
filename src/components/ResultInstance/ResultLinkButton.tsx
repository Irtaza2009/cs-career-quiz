import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";

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
        <Button
          className={"border border-3 border-black"}
          variant={"light"}
          size={"lg"}
        >
          Results
        </Button>
      </Link>
    );
  } else if (wdScore > Math.max(aiScore, dsScore, seScore, csaScore)) {
    return (
      <Link href={"/wd"}>
        <Button
          className={"border border-3 border-black"}
          variant={"light"}
          size={"lg"}
        >
          Results
        </Button>
      </Link>
    );
  } else if (aiScore > Math.max(dsScore, wdScore, seScore, csaScore)) {
    return (
      <Link href={"/ai"}>
        <Button
          className={"border border-3 border-black"}
          variant={"light"}
          size={"lg"}
        >
          Results
        </Button>
      </Link>
    );
  } else if (dsScore > Math.max(wdScore, aiScore, seScore, csaScore)) {
    return (
      <Link href={"/ds"}>
        <Button
          className={"border border-3 border-black"}
          variant={"light"}
          size={"lg"}
        >
          Results
        </Button>
      </Link>
    );
  } else if (csaScore > Math.max(wdScore, aiScore, seScore, dsScore)) {
    return (
      <Link href={"/csa"}>
        <Button
          className={"border border-3 border-black"}
          variant={"light"}
          size={"lg"}
        >
          Results
        </Button>
      </Link>
    );
  } else {
    return (
      <Link href={"/jack"}>
        <Button variant={"light"} size={"lg"}>
          Results
        </Button>
      </Link>
    );
  }
};

export default ResultLinkButton;
