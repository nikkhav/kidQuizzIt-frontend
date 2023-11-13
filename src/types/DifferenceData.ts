type categoryType = {
  id: number;
  parent_id: number;
  title: string;
};

export interface differenceData {
  category: categoryType;
  category_id: number;
  id: number;
  image1: string;
  image2: string;
}
