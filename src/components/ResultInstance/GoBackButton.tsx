import React from "react";
import Link from "next/link";

const GoBackButton = () => {
  return (
    <Link href="/">
      <button className={"backButton"}>Start over again!</button>
    </Link>
  );
};

export default GoBackButton;
