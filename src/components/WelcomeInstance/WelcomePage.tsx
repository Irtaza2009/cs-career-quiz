"use client";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";

interface WelcomeTitleProps {
  onStartQuiz: () => void;
}

/**
 * Renders a welcome page that has a title, a description and a button to start the quiz.
 * @param onStartQuiz - Function that is called when the start button is clicked.
 */
const WelcomePage = ({ onStartQuiz }: WelcomeTitleProps) => {
  return (
    <div id={"welcome-page"} className={"pt-5 "}>
      <Row className={"d-flex justify-content-between"}>
        <h1 id={"main-title"}>What CS Career Matches Your Personality?</h1>
      </Row>
      <Row className={"text-center mt-3"}>
        <Col>
          <h3>
            Overwhelmed by the immense amount of careers in Computer
            Science? Ready to find out the one best suited for you?
            <br /> Then let&#39;s get started!
          </h3>
        </Col>
      </Row>
      <Row
        className={
          "d-flex align-content-center justify-content-center mt-5 mb-5"
        }
      >
        <Button
          className={"text-uppercase border border-3 border-black"}
          onClick={onStartQuiz}
          id={"start-button"}
          variant={"light"}
          size={"lg"}
        >
          Start!
        </Button>
      </Row>
    </div>
  );
};

export default WelcomePage;
