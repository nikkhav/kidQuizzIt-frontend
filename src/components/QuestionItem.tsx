import React, { useState } from "react";
import { QuestionItem as QuestionItemType } from "../types/QuestionItem";
import { AnswerItem } from "../types/AnswerItem";

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
    <div className="w-full flex-col items-start justify-start mb-10">
      <h2 className="text-black text-lg font-main font-bold mb-2 sm:text-2xl">
        {ques.question_text}
      </h2>
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
              className={`w-max pl-3 pr-5 flex justify-start items-center mb-1 ${
                showResults ? inputStyle : ""
              }`}
            >
              <input
                type="radio"
                name={`${index}${index}${index}${index}`}
                id={`answer_item_${index}${i}`}
                className="mr-3"
                onClick={() => handleAnswerSelect(i)}
                disabled={showResults}
              />
              <p className="text-sm font-main font-normal sm:text-lg">
                {answerItem.answer_text}
              </p>
            </label>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionItem;
