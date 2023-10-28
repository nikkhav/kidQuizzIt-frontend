import { QuestionItem } from "./QuestionItem";
export interface QuestionArrItem {
  id: number;
  category_id: number;
  title: string;
  questions: QuestionItem[];
}
