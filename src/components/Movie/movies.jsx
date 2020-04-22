import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieList from "./movieList";
import MovieService from "../../services/MovieService";

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.setState(() => ({ movies: MovieService.getMovies() }));
  }

  handleDeleteMovie = (movie) => {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies });
  };

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: "-15px" }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <Link className="btn btn-primary m-3" to="/movies/new">
              Add movie
            </Link>
            <MovieList
              movies={this.state.movies}
              onDelete={this.handleDeleteMovie}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
