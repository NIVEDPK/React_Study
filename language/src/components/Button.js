import React from "react";
import LanguageContext from "../contexts/LanguageContex";

class Button extends React.Component {
  static contextType = LanguageContext;

  renderButton = (value) => {
    const text = value === "english" ? "Submit" : "Voorlegen";
    return text;
  };

  render() {
    return (
      <button className="ui button primary ">
        <LanguageContext.Consumer>
          {(value) => this.renderButton(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
