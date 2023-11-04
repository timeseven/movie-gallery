export interface MovieProps {
  id: string;
  title: string;
  image: string;
  genre: string;
  imdb: string;
  movieTrailerLink: string;
  description: string;
}

export interface MovieComponentProps {
  movie: MovieProps;
}

export interface MoviesComponentProps {
  movies: MovieProps[];
}
