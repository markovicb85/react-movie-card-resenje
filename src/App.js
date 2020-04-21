import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/header";
import Movies from "./components/Movie/movies";
import MovieForm from "./components/Movie/movieForm";

class App extends Component {
  state = {
    title: "React Movie Cards",
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Switch>
            <Route path="/movies/new" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
