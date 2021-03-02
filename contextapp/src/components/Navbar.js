import React, { Component } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ color: theme.syntax, background: theme.ui }}>
                  <h1>Context App</h1>
                  {isAuthenticated ? (
                    <strong onClick={toggleAuth} style={{ cursor: "pointer" }}>
                      Logged In
                    </strong>
                  ) : (
                    <strong onClick={toggleAuth} style={{ cursor: "pointer" }}>
                      Logged Out
                    </strong>
                  )}
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext>
    );
  }
}

export default Navbar;
