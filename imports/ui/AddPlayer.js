import React, { Component } from "react";

import { Players } from "./../api/players";

export default class AddPlayer extends Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if (playerName) {
      e.target.playerName.value = "";
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input typw="text" name="playerName" placeholder="Player name" />
        <button>Add Player</button>
      </form>
    );
  }
}
