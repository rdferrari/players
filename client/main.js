import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Tracker } from "meteor/tracker";
// api
import { Players, calculatePositions } from "./../imports/api/players";
// Components
import App from "./../imports/ui/App";

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find(
      {},
      {
        sort: {
          score: -1
        }
      }
    ).fetch();
    let positioPlayers = calculatePositions(players);
    let scoreTitle = "Score NavBar";
    render(
      <App title={scoreTitle} players={positioPlayers} />,
      document.getElementById("app")
    );
  });
});
