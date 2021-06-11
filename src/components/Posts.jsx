import React from "react";

import AppCard from "./AppCard";

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  buildLI([key, { title, description }]) {
    return (
      <li key={key}>
        <AppCard>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </AppCard>
      </li>
    );
  }

  render() {
    console.log(this.props);
    return (
      <ul className="d-flex flex-column">
        {this.props.data.reverse().map(this.buildLI)}
      </ul>
    );
  }
}

export default Posts;
