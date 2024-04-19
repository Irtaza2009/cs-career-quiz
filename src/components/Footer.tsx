import React from "react";
import { Container } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

/**
 * Renders a footer of the page that contains the information about the challenge, the creator of the quiz and the sources used.
 */
const Footer = () => {
  return (
    <Container
      id={"footer"}
      className={
        "footer d-flex flex-column align-items-center justify-content-center text-center mt-5"
      }
    >
      <p>
        Made by <a href={"https://github.com/irtaza2009"}>Irtaza</a> for{" "}
        <a
          href={
            "https://www.codedex.io/community/monthly-challenge/submission/"
          }
        >
          {" "}
          Codédex April Monthly Challenge!
        </a>
      </p>
    </Container>
  );
};

export default Footer;
