import React from "react";

const Context = React.createContext("dutch");

export class LanguageStore extends React.Component {
  state = { language: "english" };

  renderLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, renderLanguage: this.renderLanguage }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
