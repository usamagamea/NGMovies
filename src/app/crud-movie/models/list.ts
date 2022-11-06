export interface CatDto {
  status: string;
  message: listDto;
}

export interface listDto {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}
