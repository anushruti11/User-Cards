import Users from "./Components/Card";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_results: [], loading: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    // document.getElementById("main").style.display='flex';
    const link =
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_results: users.results, loading: false });
        console.log(users.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <>
        <nav>
          <div className="header">
            <div className="column1">
              <h1>YourChallenge</h1>
            </div>
            <div className="column2">
              <button className="nav-button" onClick={this.updateState}>
                Product
              </button>
              <button className="nav-button">Download</button>
              <button className="nav-button">Pricing</button>
            </div>
          </div>
        </nav>
        <div className="body-panel">
          <Users
            loading={this.state.loading}
            users={this.state.users_results}
          />
        </div>
      </>
    );
  }
}

export default App;

