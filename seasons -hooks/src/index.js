import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import LocationFinder from "./LocationFinder";

const App = () => {
  const [lat, errorMessage] = LocationFinder();

  const renderContent = () => {
    if (errorMessage) {
      return <ErrorMessage message={errorMessage} />;
    } else if (lat) {
      return <SeasonDisplay lat={lat} />;
    } else {
      return <Spinner message="Please allow location access " />;
    }
  };

  //should declare a render method when using react class based component
  return <div>{renderContent()}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
