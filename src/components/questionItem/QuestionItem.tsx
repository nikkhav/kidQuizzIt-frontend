import React, { useState } from "react";
import { QuestionItem as QuestionItemType } from "../../types/QuestionItem";
import { AnswerItem } from "../../types/AnswerItem";
import "./questionItem.css";

type QuestionItemProps = {
  ques: QuestionItemType;
  index: number;
  showResults: boolean;
  onAnswerSelect: any;
};
const QuestionItem: React.FC<QuestionItemProps> = ({
  ques,
  index,
  showResults,
  onAnswerSelect,
}) => {
  const answers: AnswerItem[] = ques.answers;
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    onAnswerSelect(index, answerIndex);
  };
  return (
    <div className="question_item">
      <h2 className="question_item_title" dangerouslySetInnerHTML={{ __html: ques.question_text }}></h2>
      <ul>
        {answers.map((answerItem, i) => {
          const isCorrect = answerItem.is_correct;
          const isSelected = selectedAnswer === i;
          const isUserCorrect = showResults && isSelected && isCorrect;
          let inputStyle = "";
          if (isSelected) {
            inputStyle = isUserCorrect
              ? "user-correct-answer"
              : "user-incorrect-answer";
          }
          return (
            <label
              htmlFor={`answer_item_${index}${i}`}
              className={`question_label ${showResults ? inputStyle : ""}`}
            >
              <input
                type="radio"
                name={`${index}${index}${index}${index}`}
                id={`answer_item_${index}${i}`}
                onClick={() => handleAnswerSelect(i)}
                disabled={showResults}
              />
              <p dangerouslySetInnerHTML={{ __html: answerItem.answer_text }}></p>
            </label>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionItem;
