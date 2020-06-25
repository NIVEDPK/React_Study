import React from "react";
import LanguageContext from "../contexts/LanguageContex";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  renderValue = (language) => {
    const text = language === "english" ? "Submit" : "Voorlegen";
    return text;
  };

  renderButton = (value) => {
    return (
      <button className={`ui button ${value}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderValue(language)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(value) => this.renderButton(value)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
