"use client";
import React from "react";

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
      <h1 id={"main-title"} className={"mb-3"}>
        What CS Career Matches Your Personality?
      </h1>
      <p className={"text-center mb-5"}>
        Overwhelmed by the immense amount of careers in Computer Science? Ready
        to find out the one best suited for you? <br /> Then let&#39;s get
        started!
      </p>
      <div className={"text-center"}>
        <button className={"backButton"} onClick={onStartQuiz}>
          Start!
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
