export interface Region {
  id: string;
  region_name: string;
  area: {
    id: string;
    area_name: string;
  }[];
}
