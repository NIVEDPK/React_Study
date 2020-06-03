import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const API_KEY = "OUR GOOGLE YOUTUBE API KEY";

class App extends React.Component {
  state = { videos: [], selectedvideo: null };

  onSelectVideo = (video) => {
    this.setState({ selectedvideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("building");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: API_KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedvideo: response.data.items[0],
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedvideo} />
            </div>

            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                selectedVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
