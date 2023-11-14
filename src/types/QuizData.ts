import { QuestionItem } from "./QuestionItem";
import { childCategory } from "./childCategory";

export interface quizData {
  category: childCategory;
  category_id: number;
  id: number;
  question: QuestionItem[];
  title: string;
}
