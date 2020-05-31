import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { image: [] };
  onSubmit = async (term) => {
    const response = await unsplash.get("search/photos", {
      params: {
        query: term,
      },
    });

    this.setState({ image: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSubmit} />
        Found {this.state.image.length} images
      </div>
    );
  }
}

export default App;
