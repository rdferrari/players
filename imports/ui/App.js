import React, { Component } from "react";
import PropTypes from "prop-types";

// api
import { Players } from "./../api/players";

import NavBar from "./NavBar";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar title={this.props.title} />
        </header>
        {/* The players refers to the let players = Players.find().fetch(); */}
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};
