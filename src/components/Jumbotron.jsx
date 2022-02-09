import { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Strive Books</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </div>
    );
  }
}

export default Jumbotron;
