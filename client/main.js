import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

// The Tracker.autorun prevent the empty data load
import { Tracker } from "meteor/tracker";

import { Players } from "./../imports/api/players";

// Iterate - map the data from Mongo
const renderPlayers = playersList =>
  playersList.map(player => {
    return (
      <div>
        <p key={player._id}>
          {player.name} has {player.score} score(s).{" "}
          <button
            onClick={() => {
              Players.update(player._id, {
                $inc: { score: 1 }
              });
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              Players.update(player._id, {
                $inc: { score: -1 }
              });
            }}
          >
            -1
          </button>
          <button onClick={() => Players.remove({ _id: player._id })}>X</button>
        </p>
      </div>
    );
  });

const handleSubmit = e => {
  let playerName = e.target.playerName.value;
  e.preventDefault();
  if (playerName) {
    e.target.playerName.value = "";
    Players.insert({
      name: playerName,
      score: 0
    });
  }
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let name = "Rodrigo";
    let App = (
      <div>
        <header>
          <h1>Score App from {name}</h1>
        </header>
        <p>{renderPlayers(players)}</p>
        <form onSubmit={handleSubmit}>
          <input typw="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
    render(App, document.getElementById("app"));
  });
});
