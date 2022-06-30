export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  name: string;
  revenue: number;
  runtime: number;
  status: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
}

export interface MovieDto {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieVideosDTO {
  id: number;
  results: MovieVideo[];
}

export interface MovieVideo {
  site: string;
  key: string;
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface MovieCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}
