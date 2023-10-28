import React from "react";
import QuestionItem from "./QuestionItem";
import { QuestionItem as QuestionItemType } from "../types/QuestionItem";

type QuestionsContainerType = {
  questions: QuestionItemType[];
};
const QuestionsContainer: React.FC<QuestionsContainerType> = ({
  questions,
}) => {
  return (
            <div className="w-full flex-col items-start justify-start">
            {questions.map((ques: QuestionItemType, index: number) => {
                return <QuestionItem key={ques.id} ques={ques} index={index}/>
             })}
            </div>);
};

export default QuestionsContainer;
