import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  let location = {
    lat: "",
    long: "",
  };
  navigator.geolocation.getCurrentPosition(
    (position) => {
      location.lat = position.coords.latitude;
      location.long = position.coords.longitude;
    },
    (error) => {
      console.log(error);
      location = {};
    }
  );

  return (
    <div>
      <div>Latitude : {location.lat}</div>
      <div>Longitude : {location.long}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
