import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContex";
import ColorContext from "../contexts/ColorContext";
import LanguageComponent from "../components/LanguageComponent";

class App extends React.Component {
  state = { language: "english" };

  renderLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageComponent />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
