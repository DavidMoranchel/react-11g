import React from "react";

import AppCard from "./AppCard";

const data = [
  {
    title: "Card title 1",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Card title 2",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Card title 3",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "Card title 4",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  buildLI({ id, name, species }) {
    return (
      <li key={id}>
        <AppCard>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Species: {species}</p>
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
        {this.props.data.map(this.buildLI)}
      </ul>
    );
  }
}

export default Posts;
