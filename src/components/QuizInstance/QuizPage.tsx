import React, { useState } from "react";
import QuizCard from "@/components/QuizInstance/QuizCard";
import ResultLinkButton from "@/components/ResultInstance/ResultLinkButton";
import { quizData } from "@/components/QuizInstance/quizData";

/**
 * Renders the actual quiz and handles the score and the question to show
 */
const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [seScore, setseScore] = useState(0);
  const [wdScore, setwdScore] = useState(0);
  const [aiScore, setaiScore] = useState(0);
  const [dsScore, setdsScore] = useState(0);
  const [csaScore, setcsaScore] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const onChoose = (answerCode: "wd" | "ai" | "ds" | "se" | "csa") => {
    switch (answerCode) {
      case "se":
        setseScore((value) => value + 1);
        break;
      case "wd":
        setwdScore((value) => value + 1);
        break;
      case "ai":
        setaiScore((value) => value + 1);
        break;
      case "ds":
        setdsScore((value) => value + 1);
        break;
      case "csa":
        setcsaScore((value) => value + 1);
    }
    handleNextQuestion();
  };

  if (quizFinished) {
    return (
      <div className={"text-center mt-5 mb-3"}>
        <h1>Are you ready?</h1>
        <h5 className={"mb-5"}>
          Press the button to find out the career best suited for you!
        </h5>
        <ResultLinkButton
          dsScore={dsScore}
          aiScore={aiScore}
          wdScore={wdScore}
          seScore={seScore}
          csaScore={csaScore}
        />
      </div>
    );
  } else {
    return (
      <>
        <QuizCard {...quizData[currentQuestionIndex]} onChoose={onChoose} />
      </>
    );
  }
};

export default QuizPage;
