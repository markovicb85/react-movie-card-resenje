import React, { Component } from "react";
import Input from "./input";

class MovieForm extends Component {
  state = {
    movie: {
      imageUrl: "",
      title: "",
      subtitle: "",
      description: "",
    },
    errors: [],
  };

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
      movie = { ...this.state.movie };
      movie[id] = value;
      const errors = this.state.errors.filter((error) => error.id !== id);
      this.setState({ movie, errors });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const movie = { ...this.state.movie };
    this.props.location.onSaveMovie(movie);
    this.props.history.push("/movies");
  };

  render() {
    const { movie, errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <Input
              id="imageUrl"
              label="Image URL"
              value={movie.imageUrl}
              onChange={this.handleChange}
              errors={errors}
            />
            <Input
              id="title"
              label="Title"
              value={movie.title}
              onChange={this.handleChange}
              errors={errors}
            />
            <Input
              id="subtitle"
              label="Subtitle"
              value={movie.subtitle}
              onChange={this.handleChange}
              errors={errors}
            />
            <Input
              id="description"
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
