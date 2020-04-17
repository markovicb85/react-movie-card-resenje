import React, { Component } from "react";
import MovieList from "./movieList";
import MovieService from "../../services/MovieService";

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.setState(() => ({ movies: MovieService.getMovies() }));
  }

  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: "-15px" }}>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <button className="btn btn-primary">Add movie</button>
            <MovieList movies={this.state.movies} />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
