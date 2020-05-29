import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        //this.state.lat = position.coords.latitude;
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  //should declare a render method when using react class based component
  render() {
    if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>
          <div>Error : {this.state.errorMessage} </div>
        </div>
      );
    }

    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <div>Latitude : {this.state.lat} </div>
        </div>
      );
    }

    if (!this.state.lat && !this.state.errorMessage) {
      return (
        <div>
          <div>Loading..... </div>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
