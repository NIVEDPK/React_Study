import React from "react";
import LanguageContext from "../contexts/LanguageContex";

class LanguageComponent extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Choose language :
        <i
          className="flag us"
          onClick={() => this.context.renderLanguage("english")}
        />
        <i
          className="flag an"
          onClick={() => this.context.renderLanguage("dutch")}
        />
      </div>
    );
  }
}

export default LanguageComponent;
