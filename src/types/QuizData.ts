import { QuestionItem } from "./QuestionItem";
import { childCategory } from "./childCategory";

export interface quizData {
  category: childCategory;
  category_id: number;
  id: number;
  questions: QuestionItem[];
  title: string;
}
