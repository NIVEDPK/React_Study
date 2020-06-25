import React from "react";
import LanguageContext from "../contexts/LanguageContex";

class Field extends React.Component {
  renderButton = (language) => {
    const text = language === "english" ? "Name" : "Naime";
    return text;
  };

  render() {
    return (
      <div className="ui field">
        <LanguageContext.Consumer>
          {({ language }) => <label> {this.renderButton(language)} </label>}
        </LanguageContext.Consumer>
        <input />
      </div>
    );
  }
}

export default Field;
