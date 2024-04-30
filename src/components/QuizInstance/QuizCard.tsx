import React, { useRef, useState } from "react";
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

const QuizCard = ({
  answers,
  questionNumber,
  questionText,
  onChoose,
}: QuizCardProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const playSound = () => {
    if (audioRef.current && audioRef.current.readyState === 4) {
      audioRef.current.play();
    }
  };

  const colors = [
    "#ff6962",
    "#19747e",
    "#7e3f2e",
    "#876e87",
    "#195c9f",
    "#581243",
  ]; // Additional colors added

  const changeBackgroundColor = () => {
    // Toggle between the two colors for the top and bottom of the gradient
    const topColorIndex = (currentColorIndex + 1) % colors.length;
    const bottomColorIndex = (currentColorIndex + 2) % colors.length;

    // Set the background gradient using the current and next colors
    document.body.style.background = `linear-gradient(to bottom right, ${colors[topColorIndex]}, ${colors[bottomColorIndex]})`;

    // Update the current color index
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
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
              changeBackgroundColor();
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
              changeBackgroundColor();
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
              changeBackgroundColor();
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
              changeBackgroundColor();
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
              changeBackgroundColor();
            }}
            answerCode={"csa"}
            answerText={answers.csa}
          />
        </Col>
      </Row>
      <audio ref={audioRef}>
        <source src="/sounds/start.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default QuizCard;
