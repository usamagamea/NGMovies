import { Movie } from './movies';

export interface TV extends Movie {}

export interface TvDto {
  name: string; 
  page: number;
  results: TV[];
  total_results: number;
  total_pages: number;
}
