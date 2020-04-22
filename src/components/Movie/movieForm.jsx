import React, { Component } from "react";
import { v4 } from "uuid";
import Input from "./input";

import MovieService from "../../services/MovieService";

class MovieForm extends Component {
  state = {
    movie: {
      id: "",
      imageUrl: "",
      title: "",
      subtitle: "",
      description: "",
      year: "",
      rating: 3.5,
    },
    errors: [],
    year: {
      min: 2000,
      max: 2020,
    },
  };

  componentDidMount() {
    const { movie, year } = this.state;
    movie.id = v4();
    movie.year = Math.random() * (year.max - year.min) + year.min;
  }

  handleChange = (e) => {
    e.preventDefault();
    const { id, value, name } = e.currentTarget;
    let movie = { ...this.state.movie };

    if (value === "") {
      if (!this.state.errors.find((error) => error.id === id)) {
        movie[id] = value;
        this.setState({
          movie: movie,
          errors: [
            ...this.state.errors,
            {
              id: id,
              message: `${name} is requred.`,
            },
          ],
        });
      }
    } else {
      movie[id] = value;
      const errors = this.state.errors.filter((error) => error.id !== id);
      this.setState({ movie, errors });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const movie = { ...this.state.movie };
    MovieService.saveMovies(movie);
    this.props.history.push("/movies");
  };

  render() {
    const { movie, errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <Input
              inputId="imageUrl"
              label="Image URL"
              value={movie.imageUrl}
              onChange={this.handleChange}
              errors={errors}
            />
            <Input
              inputId="title"
              label="Title"
              value={movie.title}
              onChange={this.handleChange}
              errors={errors}
            />
            <Input
              inputId="subtitle"
              label="Subtitle"
              value={movie.subtitle}
              onChange={this.handleChange}
              errors={errors}
            />
            <Input
              inputId="description"
              label="Description"
              value={movie.description}
              onChange={this.handleChange}
              errors={errors}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={errors.length > 0 ? true : false}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default MovieForm;
