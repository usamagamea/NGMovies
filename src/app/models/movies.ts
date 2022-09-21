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

export interface Item {
  id: number;
  poster_path: string;
  title: string;
  name?: string;
  vote_average: number;
  backdrop_path: string;
  vote_count: number;
  release_date: string;
  overview: string;
  routePath?: string;
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

export const mapMovieToItem = (movie: Movie): Item => {
  return {
    id: movie.id,
    title: movie.title,
    name: movie.name,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
    backdrop_path: movie.backdrop_path,
    vote_count: movie.vote_count,
    release_date: movie.release_date,
    overview: movie.overview,
    routePath: '/movie/' + movie.id,
  };
};
