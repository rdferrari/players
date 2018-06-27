import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Tracker } from "meteor/tracker";
// api
import { Players } from "./../imports/api/players";
// Components
import App from "./../imports/ui/App";
// import NavBar from "./../imports/ui/NavBar";
// import AddPlayer from "./../imports/ui/AddPlayer";
// import PlayerList from "./../imports/ui/PlayerList";

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
    let scoreTitle = "Score NavBar";
    render(
      <App title={scoreTitle} players={players} />,
      document.getElementById("app")
    );
  });
});
