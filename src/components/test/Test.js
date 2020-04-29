import React, { Component } from "react";

class Test extends Component {
  state = {
    id: ",",
    title: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.title,
          id: data.id,
        })
      );
  }
  render() {
    const { id, title } = this.state;
    return (
      <div>
        <h1>{id}</h1>
        <p>{title}</p>
      </div>
    );
  }
}

export default Test;
