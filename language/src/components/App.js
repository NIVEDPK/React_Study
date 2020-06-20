import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContex";

class App extends React.Component {
  state = { language: "english" };

  renderLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Choose language :
          <i
            className="flag us"
            onClick={() => this.renderLanguage("english")}
          />
          <i className="flag an" onClick={() => this.renderLanguage("dutch")} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
