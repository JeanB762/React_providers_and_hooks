import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import { Brightness4 } from "@material-ui/icons";

import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Switch color="primary" onClick={toggleTheme}>
          Toggle Theme
        </Switch>
        <Brightness4 color="primary" />
      </div>
    );
  }
}

export default ThemeToggle;
