type categoryWhyType = {
  parent_id: number;
  id: number;
  title: string;
};
export interface WhyItem {
  category: categoryWhyType;
  category_id: number;
  description: string;
  id: number;
  image: string;
  title: string;
}
