import React from "react";
import Wrapper from "../components/Wrapper";
import { QuestionArrItem } from "../types/QuestionsArrItem";
import QuestionsContainer from "../components/QuestionsContainer";

const Questions = () => {
  const questionsArr: QuestionArrItem[] = [
    {
      id: 3,
      category_id: 12,
      title: "Harry Potter Quiz",
      questions: [
        {
          id: 1,
          quiz_id: 3,
          question_text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore",
          answers: [
            {
              id: 1,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing",
              is_correct: true,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing",
              is_correct: false,
            },
          ],
        },
        {
          id: 2,
          quiz_id: 3,
          question_text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore",
          answers: [
            {
              id: 1,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: true,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
          ],
        },
        {
          id: 3,
          quiz_id: 3,
          question_text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore",
          answers: [
            {
              id: 1,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: true,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
          ],
        },
        {
          id: 4,
          quiz_id: 3,
          question_text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore",
          answers: [
            {
              id: 1,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: true,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
          ],
        },
        {
          id: 5,
          quiz_id: 3,
          question_text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore",
          answers: [
            {
              id: 1,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: true,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
          ],
        },
        {
          id: 6,
          quiz_id: 3,
          question_text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore",
          answers: [
            {
              id: 1,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: true,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
          ],
        },
        {
          id: 7,
          quiz_id: 3,
          question_text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore",
          answers: [
            {
              id: 1,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: true,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
          ],
        },
        {
          id: 8,
          quiz_id: 3,
          question_text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore",
          answers: [
            {
              id: 1,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: true,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
          ],
        },
        {
          id: 9,
          quiz_id: 3,
          question_text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore",
          answers: [
            {
              id: 1,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: true,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
          ],
        },
        {
          id: 10,
          quiz_id: 3,
          question_text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolore",
          answers: [
            {
              id: 1,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: true,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
            {
              id: 3,
              quiz_question_id: 3,
              answer_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing?",
              is_correct: false,
            },
          ],
        },
      ],
    },
  ];
  const questionsItem: QuestionArrItem = questionsArr[0];
  return (
    <>
      <Wrapper>
        <h1 className="w-full my-16 sm:text-5xl md:text-6xl mx-auto text-center text-4xl font-main font-semibold">
          {questionsItem.title}
          <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
        </h1>
        <QuestionsContainer questions={questionsItem.questions} />
        <div className="w-full flex items-center justify-center mt-8 mb-16 md:mt-16">
        <button className="bg-darkGreen border-white border-2 rounded-lg py-2 px-4 md:py-4 md:px-8 font-main font-medium text-white text-lg md:text-xl transition-all duration-300 hover:bg-white hover:text-darkGreen hover:border-darkGreen">CHECK ANSWERS</button>
        </div>
      </Wrapper>
    </>
  );
};

export default Questions;
