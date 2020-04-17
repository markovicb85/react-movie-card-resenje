import React, { Component } from "react";
import Header from "./components/header";
import Movies from "./components/Movie/movies";

class App extends Component {
  state = {
    title: "React Movie Cards",
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Movies />
        </div>
      </div>
    );
  }
}

export default App;
