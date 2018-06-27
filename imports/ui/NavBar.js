import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

NavBar.propTypes = {
  title: PropTypes.string
};

NavBar.defaultProps = {
  title: "NavBar default title"
};
