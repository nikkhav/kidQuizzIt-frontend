import { childCategory } from "./childCategory";

export interface tourData {
  category: childCategory;
  category_id: number;
  description1: string;
  description2: string;
  id: number;
  image: string;
  title: string;
  city: {
    id: number;
    name: string;
    country: {
      id: number;
      name: string;
    };
  };
}
