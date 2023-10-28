import { AnswerItem } from "./AnswerItem";

export interface QuestionItem {
  id: number;
  quiz_id: number;
  question_text: string;
  answers: AnswerItem[];
}
