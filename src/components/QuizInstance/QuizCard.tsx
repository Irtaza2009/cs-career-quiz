import React, { useRef } from "react";
import Question from "@/components/QuizInstance/Question";
import Answer from "@/components/QuizInstance/Answer";
import { Col, Row } from "react-bootstrap";

interface QuizCardProps {
  questionNumber: number;
  questionText: string;
  answers: {
    wd: string;
    ai: string;
    ds: string;
    se: string;
    csa: string;
  };
  onChoose: (answerCode: "wd" | "ai" | "ds" | "se" | "csa") => void;
}

/**
 * Renders the whole question card along with the question itself and the answer buttons
 * @param answers contains the answers to display
 * @param questionNumber contains the number of the question
 * @param questionText contains the question text/prompt
 * @param onChoose contains the function to call when an answer is chosen
 */
const QuizCard = ({
  answers,
  questionNumber,
  questionText,
  onChoose,
}: QuizCardProps) => {
  // Create a ref to the audio element
  const audioRef = useRef<HTMLAudioElement>(null);

  // Function to play the audio when the button is clicked
  const playSound = () => {
    // Check if the audio element exists and is loaded
    if (audioRef.current && audioRef.current.readyState === 4) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <Question questionNumber={questionNumber} questionText={questionText} />
      <Row className={"d-flex justify-content-center align-items-center"}>
        <Col className={"d-flex justify-content-center"}>
          <Answer
            onClick={() => {
              onChoose("wd");
              playSound();
            }}
            answerCode={"wd"}
            answerText={answers.wd}
          />
        </Col>
        <Col className={"d-flex justify-content-center"}>
          <Answer
            onClick={() => {
              onChoose("ai");
              playSound();
            }}
            answerCode={"ai"}
            answerText={answers.ai}
          />
        </Col>
        <Col className={"d-flex justify-content-center"}>
          <Answer
            onClick={() => {
              onChoose("ds");
              playSound();
            }}
            answerCode={"ds"}
            answerText={answers.ds}
          />
        </Col>
        <Col className={"d-flex justify-content-center"}>
          <Answer
            onClick={() => {
              onChoose("se");
              playSound();
            }}
            answerCode={"se"}
            answerText={answers.se}
          />
        </Col>
        <Col className={"d-flex justify-content-center"}>
          <Answer
            onClick={() => {
              onChoose("csa");
              playSound();
            }}
            answerCode={"csa"}
            answerText={answers.csa}
          />
        </Col>
      </Row>
      {/* Audio element */}
      <audio ref={audioRef}>
        <source src="/sounds/start.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default QuizCard;
