import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieList from "./movieList";
import MovieService from "../../services/MovieService";

class Movies extends Component {
  _isMounted = false;

  state = {
    movies: [],
  };

  componentDidMount() {
    this._isMounted = true;
    this.setState(() => ({ movies: MovieService.getMovies() }));
    console.log("Filmovi");
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleSaveMovie = (movie) => {
    // this.setState({ movies: [...this.state.movies, movie] });
    // console.log(this.state.movies);
    MovieService.saveMovies(movie);
  };

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: "-15px" }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <Link
              className="btn btn-primary m-3"
              to={{
                pathname: "/movies/new",
                onSaveMovie: this.handleSaveMovie,
              }}
            >
              Add movie
            </Link>
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
