import { childCategory } from "./childCategory";

export interface WhyItem {
  category: childCategory;
  category_id: number;
  description: string;
  description2?: string;
  description3?: string;
  id: number;
  image: string;
  title: string;
}
