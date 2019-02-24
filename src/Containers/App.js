import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "../index.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      Searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
    /**this is to check out if the page is loading or not */
  }

  onSearchChange = event => {
    this.setState({
      Searchfield: event.target.value
    });
  };

  render() {
    const { robots, Searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1 className="tc">Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
