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
        <h1 className="w-full my-16 mx-auto text-center text-7xl font-main font-semibold">
          {questionsItem.title}
        </h1>
        <QuestionsContainer questions={questionsItem.questions} />
      </Wrapper>
    </>
  );
};

export default Questions;
