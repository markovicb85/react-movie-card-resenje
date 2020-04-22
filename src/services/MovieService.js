import movies from "./movies.json";

export default class MovieService {
  static getMovies() {
    return movies ? movies : [];
  }

  static saveMovies(movie) {
    return movies.push(movie);
  }

  // static deleteMovies(movie) {
  //   return movies.pop(movie.id);
  // }
}
