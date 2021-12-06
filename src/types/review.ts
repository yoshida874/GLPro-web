export interface Review {
  id?: number;
  user_id: number;
  area_id: number;
  category_id: number;
  review_content: string;
  evaluation: number;
  created_at?: string;
}
