import React, { Component } from "react";
import PropTypes from "prop-types";

// api
import { Players } from "./../api/players";

import NavBar from "./NavBar";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";

export default class App extends Component {
  render() {
    let scoreTitle = "Score NavBar";
    return (
      <div>
        <header>
          <NavBar title={this.props.scoreTitle} />
        </header>
        {/* The players refers to the let players = Players.find().fetch(); */}
        <PlayerList players={this.props.players} />
        <AddPlayer />
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired
};
