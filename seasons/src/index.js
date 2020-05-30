import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return <ErrorMessage message={this.state.errorMessage} />;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please allow location access " />;
  }

  //should declare a render method when using react class based component
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
