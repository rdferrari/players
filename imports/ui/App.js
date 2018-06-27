import React, { Component } from "react";

import { Players } from "./../api/players";
import { Tracker } from "meteor/tracker";

let name = "Rodrigo";

const testes = [
  { _id: 1, name: "Rodrigo", score: 12 },
  { _id: 2, name: "Luciana", score: 15 },
  { _id: 3, name: "Arthur", score: 2 }
];

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return (
      <li key={player._id}>
        {player.name} has {player.score} score(s).
      </li>
    );
  });
};

Tracker.autorun(() => {
  console.log(Players.find().fetch());
});

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Scores App from {name}</h1>
        </header>
        <p>{renderPlayers(testes)}</p>
      </div>
    );
  }
}
