import React from "react";
import { QuestionItem as QuestionItemType } from "../types/QuestionItem";
import { AnswerItem } from "../types/AnswerItem";
type QuestionItemProps = {
  ques: QuestionItemType;
  index: number;
};
const QuestionItem: React.FC<QuestionItemProps> = ({ ques, index }) => {
  const answers: AnswerItem[] = ques.answers;
  return (
    <div className="w-full flex-col items-start justify-start mb-10">
      <h2 className="text-black text-lg font-main font-bold mb-2 sm:text-2xl">
        {ques.question_text}
      </h2>
      <ul>
        {answers.map((answerItem, i) => {
          return (
            <label
              htmlFor={`answer_item_${index}${i}`}
              className="flex justify-start items-center mb-1"
            >
              <input
                type="radio"
                name={`${index}${index}${index}${index}`}
                id={`answer_item_${index}${i}`}
                className="mr-3"
              />
              <p className="text-sm font-main font-normal sm:text-lg">{answerItem.answer_text}</p>
            </label>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionItem;
